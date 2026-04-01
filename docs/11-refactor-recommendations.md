# Refactor Recommendations

## Mục tiêu refactor
- Chuyển repo từ microsite hardcode sang landing page static dễ maintain
- Tách business content khỏi JSX
- Loại bỏ phần experimental không liên quan
- Chuẩn hóa metadata, assets và component structure

## Kiến trúc source đề xuất

```text
src/
  app/
    layout.js
    page.js
  content/
    site.js
    products.js
    faq.js
  components/
    layout/
      SiteHeader.jsx
      SiteFooter.jsx
      Container.jsx
    sections/
      HeroSection.jsx
      TrustStrip.jsx
      ProductSection.jsx
      WhyChooseUsSection.jsx
      CapabilitySection.jsx
      ProcessSection.jsx
      GallerySection.jsx
      FAQSection.jsx
      ContactSection.jsx
    ui/
      Button.jsx
      SectionHeading.jsx
      Card.jsx
      StatItem.jsx
  styles/
    globals.css
```

## Refactor ưu tiên theo pha

### Pha 1 - Dọn nền
1. Chốt brand name và business positioning.
2. Loại bỏ hoặc cô lập route `/blog`.
3. Xóa dependencies 3D nếu không còn dùng.
4. Ngừng dùng `out/` như nguồn chỉnh sửa.

### Pha 2 - Tách content
1. Chuyển toàn bộ copy vào `src/content/*`.
2. Tạo object riêng cho contact, metadata, USP, products, FAQ.
3. Dùng component chỉ để render, không chứa business text dài.

### Pha 3 - Tái cấu trúc UI
1. Viết lại hero và contact flow.
2. Chuẩn hóa container, spacing, headings, CTA button.
3. Tạo reusable section shell.

### Pha 4 - SEO và trust
1. Sửa metadata theo App Router schema chuẩn.
2. Thêm OG image mới.
3. Thêm address text, legal/footer info và FAQ.

## Technical changes nên làm cụ thể

### 1. Thu hẹp client components
- `page.js` nên là server component.
- Hero CTA dùng `<a>` thay vì `window.location`.
- Chỉ `SiteHeader` cần client nếu giữ mobile menu.

### 2. Sửa metadata
- `lang="vi"`
- `alternates: { canonical: ... }`
- `openGraph.images`
- `twitter.images`
- `verification` nếu muốn dùng metadata verification

### 3. Tách shell theo route group nếu còn route phụ
Nếu vẫn giữ `/blog`, nên dùng route groups hoặc layout riêng để route đó không mang navigation/business footer của landing page.

### 4. Chuẩn hóa design tokens
- Màu sắc: đổi tên token theo purpose thay vì `main-green`, `main-jean`
- Thêm token cho spacing, radius, shadow, container width

### 5. Chuẩn hóa asset usage
- Hero dùng `next/image` hoặc hình local tối ưu đúng tỷ lệ
- OG asset riêng
- Asset naming theo vai trò

## Dependency cleanup đề xuất
- Xóa:
  - `@react-three/drei`
  - `@react-three/fiber`
  - `three`
  - `three-stdlib`
  - `lamina`
  - `replace-in-file`
  - `replace-in-files-cli`

Chỉ giữ nếu có kế hoạch rõ ràng cho route 3D riêng.

## Quy ước maintainability nên áp dụng
- Mọi business copy đi qua `src/content/`
- Mọi section có prop/data rõ ràng
- Không để generated artifact trong source review flow
- Không để route experimental dùng chung metadata business
- Không commit asset ngẫu nhiên không có chiến lược brand

## Kết luận
Refactor hợp lý nhất là viết lại landing page theo cấu trúc mới, tái dùng có chọn lọc logo/palette/shell thay vì chỉnh incremental trên component cũ.
