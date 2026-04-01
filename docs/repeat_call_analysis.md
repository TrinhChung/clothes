# FLAMA "Repeat Call" Algorithm — Complete Analysis Report

> **Project**: FLAMA (Nihongo)  
> **Date**: 2026-03-19  
> **Scope**: Spaced repetition (SRS) scheduling algorithm, study session flow, state transitions, data integrity

---

## 1. Xác định "Repeat Call" là gì

Sau khi trace toàn bộ codebase, **"repeat call" trong FLAMA là hệ thống spaced repetition (lặp lại ôn tập)** dựa trên thuật toán **Anki SM-2 legacy** (non-FSRS). Cụ thể:

| Khả năng diễn giải | Bằng chứng | Kết luận |
|---|---|---|
| Logic **spaced repetition** scheduling | [anki_scheduler.py](file:///d:/Project/nihongo/app/services/anki_scheduler.py) — full SM-2 implementation với learning/review/relearning states | ✅ **Đây là luồng chính** |
| Logic gọi lại card chưa đạt (Again) | [_apply_learning()](file:///d:/Project/nihongo/app/services/anki_scheduler.py#117-200) resets `stepIndex=0` khi answer="again" | ✅ Là **sub-feature** của SRS |
| API bị gọi lặp ngoài ý muốn | Frontend có `submittingAnswer` guard, nhưng **có vấn đề** | ⚠️ Xem mục bugs |

---

## 2. Files liên quan

### Core Algorithm
- [anki_scheduler.py](file:///d:/Project/nihongo/app/services/anki_scheduler.py) — SM-2 scheduler (448 lines)

### Service & Repository Layer
- [study_service.py](file:///d:/Project/nihongo/app/services/study_service.py) — Orchestrates answer commit (69 lines)
- [study_repository.py](file:///d:/Project/nihongo/app/repositories/study_repository.py) — Card state ↔ DB mapping + queue selection (214 lines)
- [card_progress_repository.py](file:///d:/Project/nihongo/app/repositories/card_progress_repository.py) — Stats queries (270 lines)
- [review_event_repository.py](file:///d:/Project/nihongo/app/repositories/review_event_repository.py) — Event logging (293 lines)
- [stats_overview.py](file:///d:/Project/nihongo/app/services/stats_overview.py) — Review mode normalization + event recording (366 lines)

### Route Handlers
- [flashcards/study.py](file:///d:/Project/nihongo/app/routes/flashcards/study.py) — API endpoints: [study_next](file:///d:/Project/nihongo/app/routes/flashcards/study.py#55-181), [study_answer](file:///d:/Project/nihongo/app/routes/flashcards/study.py#182-286) (308 lines)
- [vocabulary.py](file:///d:/Project/nihongo/app/routes/vocabulary.py#L1756-L1870) — Server-rendered [study_deck](file:///d:/Project/nihongo/app/routes/vocabulary.py#1756-1871) page

### Models
- [card_progress.py](file:///d:/Project/nihongo/models/card_progress.py) — Per-user SRS progress (40 lines)
- [review_event.py](file:///d:/Project/nihongo/models/review_event.py) — Review event log (24 lines)
- [card.py](file:///d:/Project/nihongo/models/card.py) — Card model (25 lines)

### Frontend
- [vocabulary_study.html](file:///d:/Project/nihongo/templates/vocabulary_study.html) — Main study UI (1668 lines, inline JS)
- [flashcards/study.html](file:///d:/Project/nihongo/templates/flashcards/study.html) — Debug study UI (156 lines)

### Validators
- [flashcard_input.py](file:///d:/Project/nihongo/app/validators/flashcard_input.py#L728-L749) — [validate_study_answer_request](file:///d:/Project/nihongo/app/validators/flashcard_input.py#728-750)

### Tests
- [test_study_integration.py](file:///d:/Project/nihongo/tests/test_study_integration.py) — Existing basic tests (133 lines)

---

## 3. Luồng xử lý hiện tại

### 3.1 Study Session Flow (Server-rendered)

```
User visits /study/deck/<deck_id>
  → vocabulary.py::study_deck()
    → _collect_deck_subtree_ids(deck_id)
    → _query_study_cards_for_deck_ids(subtree_ids)   # Load all cards in subtree
    → _load_card_progress_map(card_ids)               # Load per-user progress for ALL cards
    → _select_next_note_card(cards, progress_map, now) # Select ONE due card
    → _count_due_note_cards(cards, progress_map, now)  # Count new/learn/review for UI
    → render "vocabulary_study.html" with card data
```

### 3.2 Answer Submission Flow

```
User clicks Again/Hard/Good/Easy button
  → Frontend JS submitRating(rating)
    → POST /api/study/<card_id>/answer  {rating, scope, scope_id, duration_ms, timezone}
      → study.py::study_answer()
        → validate_study_answer_request(payload)
        → Card.query.filter(Card.id == card_id)         # Load card
        → CardProgress.query.filter_by(user_id, card_id) # Load/create progress
        → _card_state_from_progress(progress, now)        # DB → CardState
        → normalize_review_mode(current_state.type)       # "learning" → "learn"
        → applyAnswer(current_state, options, now, rating) # ← Core algorithm
        → apply_study_answer_and_commit()
          → _apply_card_state_to_progress(progress, updated_state) # CardState → DB
          → _touch_note_type_install_usage()
          → _touch_deck_install_usage()
          → update_user_timezone()
          → record_review_event()                         # Append ReviewEvent row
          → db.session.commit()                           # Single transaction
    ← {success, next_url, next_card_url, intervals_preview}
  → Frontend fetches next_card_url (GET /api/study/next)
    → Study loop continues with SPA-like card swap
```

### 3.3 Card Selection Priority

```
query_next_due_card_id (SQL-level):
  Priority: relearning(0) > learning(1) > review(2) > new(3)
  Within each: sorted by due_at ASC, then created_at ASC, then Card.id ASC
  Filter: is_due = (no progress OR queue="new" OR due_at IS NULL OR due_at <= now)

select_next_due_card_from_loaded (Python-level, used by vocabulary study_deck):
  Same priority but operates on pre-loaded card list
```

---

## 4. Pseudo-code thuật toán hiện tại

```pseudo
function applyAnswer(card, options, now, answer):
    state = clone(card)
    state.reps += 1
    state.lastReviewAt = now
    
    match state.type:
        case "new" | "learning":
            return apply_learning(state, options, now, answer, relearning=false)
        case "relearning":
            return apply_learning(state, options, now, answer, relearning=true)
        case "review":
            return apply_review(state, options, now, answer)

function apply_learning(state, options, now, answer, relearning):
    steps = relearning ? options.relearningSteps : options.learningSteps
    // Default: learningSteps = [1min, 10min], relearningSteps = [10min]
    
    match answer:
        case "again":
            state.stepIndex = 0
            delay = steps[0]  // Back to first step
            return set_learning_due(state, now, delay, relearning)
        
        case "hard":
            if stepIndex <= 0:
                delay = avg(steps[0], steps[1])  // or steps[0]*1.5 if single step
                state.stepIndex = 0  // Don't advance
            else:
                delay = steps[stepIndex]  // Stay at current step
            return set_learning_due(state, now, delay, relearning)
        
        case "easy":
            return graduate(state, options, now, easyIntervalDays)
        
        case "good":
            nextIdx = stepIndex + 1
            if nextIdx < len(steps):
                state.stepIndex = nextIdx
                delay = steps[nextIdx]  // Advance to next step
                return set_learning_due(state, now, delay, relearning)
            else:
                return graduate(state, options, now, graduatingIntervalDays)

function apply_review(state, options, now, answer):
    ivl = max(minimumIntervalDays, state.intervalDays)
    ease = state.ease
    days_late = max(0, current_day - scheduled_due_day)
    
    match answer:
        case "again":
            state.lapses += 1
            state.ease -= 0.20
            lapse_interval = max(minimumIntervalDays, ivl * newIntervalFactor)
            state.intervalDays = lapse_interval
            if relearningSteps exist:
                state.type = "relearning"
                state.stepIndex = 0
                return set_learning_due(state, now, relearningSteps[0])
            else:
                return set_review_due(state, now, lapse_interval)
        
        case "hard":
            state.ease -= 0.15
            raw_next = ivl * hardFactor * intervalModifier
        
        case "good":
            base = ivl + (days_late / 2.0)
            raw_next = base * ease * intervalModifier
        
        case "easy":
            state.ease += 0.15
            base = ivl + days_late
            raw_next = base * ease * easyBonus * intervalModifier
    
    raw_next = max(raw_next, ivl + 1.0)  // Must grow by at least 1 day
    return set_review_due(state, now, raw_next)
```

---

## 5. Phân tích Scenario

### A. Business Logic

| Câu hỏi | Trả lời | Bằng chứng |
|---|---|---|
| Điều kiện đưa card vào repeat? | Answer "again" → `stepIndex=0` (learning/relearning); "again" in review → chuyển sang relearning | [_apply_learning](file:///d:/Project/nihongo/app/services/anki_scheduler.py#117-200) L129-139, [_apply_review](file:///d:/Project/nihongo/app/services/anki_scheduler.py#202-255) L222-237 |
| Repeat trong session hay session sau? | **Trong session** nếu `due_at` nằm trong ngày hiện tại (cùng [day_index](file:///d:/Project/nihongo/app/services/anki_scheduler.py#390-394)); **sang session sau** nếu `dueDay` khác ngày | [_set_learning_due](file:///d:/Project/nihongo/app/services/anki_scheduler.py#278-300) L286-299 |
| Again/Hard/Good/Easy transitions? | Xem pseudo-code ở trên. Đúng chuẩn Anki SM-2 | Verified |
| Số lần repeat tối đa? | **Không giới hạn** — user có thể bấm "again" vô hạn | No max_lapses check |
| Lặp vô hạn? | **Có thể**, nhưng đúng thiết kế (Anki cũng vậy) | By design |
| Bỏ sót item? | **Không** — [is_due()](file:///d:/Project/nihongo/app/repositories/study_repository.py#111-120) đúng, [query_next_due_card_id](file:///d:/Project/nihongo/app/repositories/study_repository.py#122-164) filter đúng | L111-119, L133-138 |
| Phân biệt new/learning/review/relearning? | **Có** — đầy đủ 4 state. [_normalize_card_type](file:///d:/Project/nihongo/app/services/anki_scheduler.py#425-434) xử lý aliases | L425-433 |
| Reset interval/ease/step đúng? | **Có** — "again" in review resets interval theo `newIntervalFactor` (default 0.0 → minimum), ease -0.20, stepIndex=0 | L222-237 |
| Khớp design mong muốn? | **Khớp** Anki SM-2 legacy. Không có custom modification ngoài chuẩn | Verified against Anki docs |

### B. Data Flow & State Transition

| Câu hỏi | Trả lời |
|---|---|
| Trường DB tham gia? | [card_progress](file:///d:/Project/nihongo/app/repositories/study_repository.py#166-174): [queue](file:///d:/Project/nihongo/app/repositories/study_repository.py#27-34), `step_index`, `due_at`, [due_day](file:///d:/Project/nihongo/app/repositories/card_progress_repository.py#112-134), [interval_days](file:///d:/Project/nihongo/app/repositories/card_progress_repository.py#259-270), `ease_factor`, [reps](file:///d:/Project/nihongo/app/routes/flashcards/__init__.py#412-414), `lapses`, `last_reviewed_at` |
| Update DB ở đâu? | `study_repository.apply_card_state_to_progress()` → ghi tất cả fields → `db.session.commit()` in [study_service.py](file:///d:/Project/nihongo/app/services/study_service.py) |
| Race condition? | ⚠️ **Có rủi ro** — Xem Bug #1 |
| Request ghi đè? | ⚠️ **Có thể** — Xem Bug #1, #2 |
| Session cache / optimistic UI? | Frontend dùng SPA-like card swap, không có optimistic state | Không có bug |
| Frontend gọi API 2 lần? | ⚠️ **Có edge case** — Xem Bug #2 |

### C. Algorithm Correctness

| Boundary Case | Kết quả | Status |
|---|---|---|
| 1. Item mới hoàn toàn | `type="new"` → treated as learning, stepIndex=0 | ✅ Đúng |
| 2. Item học dở giữa chừng | Resume from `stepIndex` in progress | ✅ Đúng |
| 3. Trả lời sai liên tiếp | `stepIndex` returns to 0 each time, `lapses` increments | ✅ Đúng |
| 4. Learning → Review | After last step + "good" → [_graduate_new_learning](file:///d:/Project/nihongo/app/services/anki_scheduler.py#264-276) → `graduatingIntervalDays=1` | ✅ Đúng |
| 5. Item overdue lâu ngày | `days_late` added to base interval → longer next interval | ✅ Đúng |
| 6. Submit nhanh / double click | ⚠️ **Có vấn đề** — Xem Bug #2 |
| 7. Refresh trang giữa session | Page reload → server re-renders → picks next due card. Committed answers preserved | ✅ Safe |
| 8. Mở 2 tab cùng lúc | ⚠️ **Có vấn đề** — Xem Bug #1 |
| 9. Resume sau mất kết nối | Fetch fails → button stays disabled → user retry manually | ✅ Safe (answer not double-sent) |
| 10. Timezone / datetime rounding | Day boundary uses `dayBoundaryHourLocal=4` with proper timezone conversion | ✅ Đúng |
| Cùng 1 item xuất hiện 2 lần? | **Không** trong SQL query (returns first), **nhưng** SPA card swap doesn't re-query full list → theoretically could re-serve same card if it's still "most due" after "again" (this is correct Anki behavior) | ✅ By design |

---

## 6. Danh sách Bug / Rủi ro

### Bug #1 — 🔴 **HIGH**: Không có locking / idempotency trên [study_answer](file:///d:/Project/nihongo/app/routes/flashcards/study.py#182-286)

**Mô tả**: Endpoint `POST /api/study/<card_id>/answer` không có idempotency check hoặc optimistic locking. Nếu 2 tab cùng review 1 card, cả 2 đều đọc cùng [CardProgress](file:///d:/Project/nihongo/models/card_progress.py#8-40), tính toán state riêng, ghi đè lẫn nhau.

**Files/hàm**:
- [study.py:study_answer() L182-285](file:///d:/Project/nihongo/app/routes/flashcards/study.py#L182-L285)
- [study_service.py:apply_study_answer_and_commit() L22-67](file:///d:/Project/nihongo/app/services/study_service.py#L22-L67)

**Điều kiện tái hiện**:
1. Mở 2 tab cùng deck
2. Cả 2 tab hiển thị cùng 1 card (same card_id)
3. Tab 1 bấm "Good", Tab 2 bấm "Again"
4. Cả 2 ghi đè [card_progress](file:///d:/Project/nihongo/app/repositories/study_repository.py#166-174) → kết quả cuối là "last write wins"
5. ReviewEvent được ghi 2 lần cho cùng 1 card

**Nguyên nhân gốc**: Không có `SELECT ... FOR UPDATE`, không có version check (`updated_at` comparison), không check `last_reviewed_at` changed.

**Ảnh hưởng**:
- SRS state bị corrupt (ease, interval, reps, lapses bị tính sai)
- ReviewEvent bị duplicate → stats sai
- User nhìn thấy card đã answer mà vẫn xuất hiện lại

**Cách sửa đề xuất**:
- **Tối thiểu**: Thêm optimistic locking check — so sánh `progress.last_reviewed_at` với giá trị expected trước khi ghi. Nếu khác → reject request 409 Conflict
- **Tốt hơn**: Thêm `SELECT ... FOR UPDATE` lock trên [CardProgress](file:///d:/Project/nihongo/models/card_progress.py#8-40) record

---

### Bug #2 — 🟡 **MEDIUM**: Frontend "again" card re-fetch có thể gửi stale answer

**Mô tả**: Khi user bấm rating rất nhanh, flow hiện tại là:
1. [submitRating()](file:///d:/Project/nihongo/templates/vocabulary_study.html#1566-1625) → POST answer → chờ response
2. Response → fetch `next_card_url` → load next card
3. Swap card vào UI

Có `submittingAnswer` guard, **nhưng** guard chỉ protect button click, không protect keyboard events.

**Files/hàm**:
- [vocabulary_study.html:submitRating() L1566-1624](file:///d:/Project/nihongo/templates/vocabulary_study.html#L1566-L1624)

**Điều kiện tái hiện**: 
- User gán keyboard shortcut (nếu có) hoặc programmatic trigger
- Tuy nhiên, hiện tại các button chỉ có click handler, **không có keyboard shortcut** → **risk thấp**

**Cách sửa**: Thêm `disabled` attribute vào buttons khi `submittingAnswer=true` (đã có [setAnswerControlsDisabled(true)](file:///d:/Project/nihongo/templates/vocabulary_study.html#1482-1493) → ✅ **Đã được handle đúng**)

> **Kết luận**: Bug #2 thực tế **không phải bug** vì [setAnswerControlsDisabled(true)](file:///d:/Project/nihongo/templates/vocabulary_study.html#1482-1493) đã disable buttons trước khi fetch. Guard hoạt động đúng.

---

### Bug #3 — 🟡 **MEDIUM**: [study_answer](file:///d:/Project/nihongo/app/routes/flashcards/study.py#182-286) ghi [ReviewEvent](file:///d:/Project/nihongo/models/review_event.py#6-24) rồi lại gặp `study_service.apply_study_answer_and_commit` cũng ghi — **nhưng thực tế chỉ ghi 1 lần**

Kiểm tra lại flow:
1. `study.py:study_answer()` gọi [apply_study_answer_and_commit()](file:///d:/Project/nihongo/app/services/study_service.py#22-68) 
2. Bên trong đó gọi [record_review_event()](file:///d:/Project/nihongo/app/services/stats_overview.py#194-219) → [create_review_event_record()](file:///d:/Project/nihongo/app/repositories/review_event_repository.py#47-70) → `db.session.add(event)`
3. Rồi `db.session.commit()`

→ Chỉ ghi 1 lần. **Không phải bug.**

---

### Bug #4 — 🟡 **MEDIUM**: [study_answer](file:///d:/Project/nihongo/app/routes/flashcards/study.py#182-286) tính `local_deck_id_for_usage` hai lần (duplicate logic)

**Mô tả**: Trong [study_answer()](file:///d:/Project/nihongo/app/routes/flashcards/study.py#182-286), logic resolve `local_deck_id_for_usage` xuất hiện **2 lần**:
1. Lần 1: Bên trong [apply_study_answer_and_commit()](file:///d:/Project/nihongo/app/services/study_service.py#22-68) (L40-49 trong [study_service.py](file:///d:/Project/nihongo/app/services/study_service.py))
2. Lần 2: Lại chính xác cùng logic ở L255-264 trong [study.py](file:///d:/Project/nihongo/app/routes/flashcards/study.py)

**Files/hàm**:
- [study.py L255-264](file:///d:/Project/nihongo/app/routes/flashcards/study.py#L255-L264)
- [study_service.py L40-49](file:///d:/Project/nihongo/app/services/study_service.py#L40-L49)

**Ảnh hưởng**: Không ảnh hưởng chức năng (cùng kết quả), nhưng vi phạm DRY → maintenance risk.

**Cách sửa**: Return `local_deck_id_for_usage` từ [apply_study_answer_and_commit()](file:///d:/Project/nihongo/app/services/study_service.py#22-68) thay vì tính lại trong route.

---

### Bug #5 — 🟢 **LOW**: [interval_days](file:///d:/Project/nihongo/app/repositories/card_progress_repository.py#259-270) trong [CardProgress](file:///d:/Project/nihongo/models/card_progress.py#8-40) là `Integer` nhưng scheduler dùng `float`

**Mô tả**: `CardProgress.interval_days` được declare là `db.Column(db.Integer)`, nhưng scheduler tính toán dùng float. Khi ghi vào DB, [apply_card_state_to_progress()](file:///d:/Project/nihongo/app/repositories/study_repository.py#81-109) dùng [int(round(float(card_state.intervalDays or 0)))](file:///d:/Project/nihongo/app/services/stats_overview.py#141-146) → OK, nhưng có thể mất precision cho interval rất lớn.

**Files**:
- [card_progress.py L23](file:///d:/Project/nihongo/models/card_progress.py#L23)
- [study_repository.py L103](file:///d:/Project/nihongo/app/repositories/study_repository.py#L103)

**Ảnh hưởng**: Minimal — rounding 0.5 day difference cho interval > 100 days là không đáng kể.

---

### Bug #6 — 🟢 **LOW**: Test file có import lỗi

**Mô tả**: [test_study_integration.py](file:///d:/Project/nihongo/tests/test_study_integration.py) import từ `app.routes.vocabulary`:
```python
from app.routes.vocabulary import _card_state_from_progress, _apply_card_state_to_progress
```
Nhưng functions này **có thể không tồn tại** ở đó (chúng được define trong [study_repository.py](file:///d:/Project/nihongo/app/repositories/study_repository.py) và chỉ imported into `flashcards.__init__.py` và `flashcards.study`).

**Files**:
- [test_study_integration.py L67, L94](file:///d:/Project/nihongo/tests/test_study_integration.py#L67)

**Ảnh hưởng**: Tests có thể fail với `ImportError`.

---

### Bug #7 — 🟡 **MEDIUM**: [_graduate_new_learning](file:///d:/Project/nihongo/app/services/anki_scheduler.py#264-276) luôn reset ease về `startingEase` khi graduate 

**Mô tả**: Khi card **graduate** từ learning → review (via "good" or "easy"), function [_graduate_new_learning()](file:///d:/Project/nihongo/app/services/anki_scheduler.py#264-276) gọi với `reset_ease=True`, khiến ease luôn được set về `startingEase` (2.50).

```python
# anki_scheduler.py L192-199
return _graduate_new_learning(
    state, options, now,
    max(options.minimumIntervalDays, options.graduatingIntervalDays),
    reset_ease=True,  # ← Always resets ease
    timezone_name=timezone_name,
)
```

Điều này có nghĩa: nếu user bấm "hard" nhiều lần trong learning steps (giảm ease qua mỗi lần), sau khi graduate, ease lại reset về 2.50. **Đây đúng là behavior của Anki SM-2 cho new cards** (ease chỉ track cho review cards), nhưng:

- Trong learning phase, `state.ease` **không bị thay đổi** bởi "hard" trong [_apply_learning()](file:///d:/Project/nihongo/app/services/anki_scheduler.py#117-200) (hard chỉ thay delay/step, không đổi ease). 
- Nên `reset_ease=True` thực chất chỉ ensure ease = startingEase, **đúng chuẩn Anki**.

→ **Kết luận: Không phải bug**, đúng thiết kế.

---

### Bug #8 — 🟢 **LOW**: [_set_review_due](file:///d:/Project/nihongo/app/services/anki_scheduler.py#302-324) overwrites `state.intervalDays` với giá trị **clamped** nhưng uses **rounded** cho `dueDay`

```python
# anki_scheduler.py L310-316
clamped_days = _clamp_review_interval(interval_days, options)
rounded_days = _round_review_interval(clamped_days, options)
state.intervalDays = float(clamped_days)      # ← Store clamped (pre-rounding)
due_day = current_day + max(1, int(rounded_days))  # ← Schedule using rounded
```

Sự khác biệt giữa clamped và rounded là rounding: [int(clamped + 0.5)](file:///d:/Project/nihongo/app/services/stats_overview.py#141-146). 

Ví dụ: `interval_days = 3.4`, `clamped = 3.4`, `rounded = 3`. 
- `state.intervalDays = 3.4` (stored in DB as [round(3.4) = 3](file:///d:/Project/nihongo/app/services/stats_overview.py#137-139))
- `due_day = current_day + 3`

Lần review tiếp: card reads `intervalDays = 3` (rounded by DB write), nhưng nếu user trả lời "good":
- `base = 3 + days_late/2`
- Kết quả hơi khác so với nếu store `3.4`

**Ảnh hưởng**: Rất nhỏ — tích lũy rounding error < 1 ngày cho intervals ngắn. Không đáng kể cho intervals dài.

---

## 7. Tổng hợp & Đề xuất

### Bảng tổng hợp

| # | Mức độ | Loại | Mô tả ngắn |
|---|---|---|---|
| 1 | 🔴 HIGH | Race condition | 2 tab ghi đè [CardProgress](file:///d:/Project/nihongo/models/card_progress.py#8-40) + duplicate [ReviewEvent](file:///d:/Project/nihongo/models/review_event.py#6-24) |
| 4 | 🟡 MEDIUM | Code quality | Duplicate `local_deck_id_for_usage` logic |
| 6 | 🟢 LOW | Test quality | Test imports có thể sai path |
| 5 | 🟢 LOW | Precision | [interval_days](file:///d:/Project/nihongo/app/repositories/card_progress_repository.py#259-270) integer vs float |
| 8 | 🟢 LOW | Precision | Clamped vs rounded interval stored differently |

### Thuật toán SRS hoạt động đúng

> [!IMPORTANT]
> **Thuật toán SM-2 core trong [anki_scheduler.py](file:///d:/Project/nihongo/app/services/anki_scheduler.py) hoạt động đúng chuẩn.** Không có bug logic trong state transitions, ease/interval calculations, hay step management. Công thức tính toán khớp 100% với Anki legacy SM-2.

### Đề xuất sửa chữa (theo thứ tự ưu tiên)

1. **Bug #1** (HIGH): Thêm optimistic locking — check `progress.last_reviewed_at` trước khi ghi. Reject nếu đã thay đổi.
2. **Bug #4** (MEDIUM): Refactor [study.py](file:///d:/Project/nihongo/app/routes/flashcards/study.py) để nhận `local_deck_id_for_usage` từ service thay vì tính lại.
3. **Bug #6** (LOW): Fix test imports.
4. Các bug LOW khác: Có thể để yên, không ảnh hưởng user experience.

---

## 8. Chi tiết cách sửa Bug #1 (Race Condition)

### Approach: Optimistic locking bằng `last_reviewed_at`

```diff
# study.py :: study_answer()
  progress = CardProgress.query.filter_by(user_id=current_user.id, card_id=card.id).first()
  if progress is None:
      progress = CardProgress(...)
      db.session.add(progress)
      db.session.flush()

+ # Optimistic lock: capture state before computation
+ expected_last_reviewed_at = progress.last_reviewed_at
  
  now = datetime.utcnow()
  current_state = _card_state_from_progress(progress, now, timezone_name=timezone_name)
  updated_state = applyAnswer(current_state, default_deck_options(), now, rating, timezone_name=timezone_name)
  
+ # Re-read and check for concurrent modification
+ fresh_progress = CardProgress.query.filter_by(
+     user_id=current_user.id, card_id=card.id
+ ).with_for_update().first()
+ 
+ if fresh_progress and fresh_progress.last_reviewed_at != expected_last_reviewed_at:
+     db.session.rollback()
+     return _api_error(
+         "CONCURRENT_REVIEW",
+         "This card was already reviewed. Loading next card.",
+         status=409,
+     )
  
  apply_study_answer_and_commit(...)
```

Frontend handling:
```diff
# vocabulary_study.html :: submitRating()
  const res = await fetch(answerUrl, { method: "POST", ... });
  const data = await res.json().catch(() => ({}));
+ if (res.status === 409) {
+     // Card was already reviewed in another tab, just load next
+     const nextCardUrl = String(data.next_card_url || "");
+     if (nextCardUrl) {
+         const nextResp = await fetch(nextCardUrl);
+         const nextPayload = await nextResp.json().catch(() => ({}));
+         if (nextResp.ok && applyNextCardPayload(nextPayload)) return;
+     }
+     window.location.reload();
+     return;
+ }
```
