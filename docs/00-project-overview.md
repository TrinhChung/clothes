# Project Overview

## Mục tiêu tài liệu
Bộ tài liệu này tổng hợp toàn bộ thông tin có thể trích xuất trực tiếp từ codebase hiện tại để phục vụ redesign một landing page tĩnh bằng Next.js cho thương hiệu xưởng may đang được thể hiện trong repo.

## Snapshot hiện trạng
- Repo hiện dùng Next.js 14 App Router với `output: "export"`, nên nền tảng kỹ thuật đã phù hợp cho static site.
- Landing page chính đang nằm ở route `/`.
- Ngoài landing page còn có route `/blog`, thực chất là một demo 3D dùng React Three Fiber, không phục vụ mục tiêu lead generation.
- Nội dung business hiện tại rất mỏng: hero, giới thiệu ngắn, 3 thẻ sản phẩm, footer contact.
- Nguồn dữ liệu business đang mâu thuẫn giữa `Fabricon` và `Lan Chuẩn`.
- Thư mục `out/` là artifact build tĩnh đã được commit sẵn, nhưng đang lệch với `src/` ở một số copy nên không nên dùng làm source of truth khi redesign.

## Website hiện tại đang làm gì
Từ source code, website hiện tại đang cố gắng đóng vai trò một microsite giới thiệu xưởng may quần áo/thời trang với CTA gọi điện. Tuy nhiên nó mới dừng ở mức giới thiệu rất sơ bộ, chưa đủ chiều sâu để hoạt động như một landing page chuyển đổi tốt.

## Kết luận nhanh
- Về business: có tín hiệu của một xưởng may thật, nhưng định vị còn mơ hồ.
- Về content: thiếu gần như toàn bộ khối trust và nội dung hỗ trợ ra quyết định.
- Về UX/UI: đơn giản, dễ hiểu ở mức cơ bản, nhưng chưa chuyên nghiệp và chưa tối ưu chuyển đổi.
- Về technical: rất dễ refactor sang static landing page sạch hơn.
- Về phạm vi redesign: nên giữ lại brand core, palette cơ bản, logo và skeleton header/footer; nên viết lại gần như toàn bộ content và section structure.

## Nguồn phân tích
Phân tích này dựa trên:
- `src/app/`
- `src/components/`
- `src/styles/`
- `src/utils/`
- `public/`
- `package.json`
- `next.config.mjs`
- `jsconfig.json`
- artifact build trong `out/` để đối chiếu sai lệch

## Cách dùng bộ docs
- Đọc [01-codebase-audit.md](./01-codebase-audit.md) để hiểu kiến trúc hiện tại.
- Đọc [02-brand-content-extraction.md](./02-brand-content-extraction.md) và [03-current-sections-audit.md](./03-current-sections-audit.md) để lấy toàn bộ content hiện có.
- Đọc [05-ux-ui-review.md](./05-ux-ui-review.md), [08-seo-trust-review.md](./08-seo-trust-review.md), [09-missing-content-and-gaps.md](./09-missing-content-and-gaps.md) để biết các điểm yếu cần xử lý.
- Dùng [10-recommended-landing-page-structure.md](./10-recommended-landing-page-structure.md) và [11-refactor-recommendations.md](./11-refactor-recommendations.md) làm blueprint cho redesign và refactor.
- Chốt các dữ liệu còn thiếu trong [12-open-questions.md](./12-open-questions.md) trước khi viết copy cuối cùng.
