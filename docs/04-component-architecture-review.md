# Component Architecture Review

## Đánh giá tổng quan
Kiến trúc component hiện tại đủ cho một site rất nhỏ, nhưng chưa phù hợp để scale thành landing page có nhiều section, content source rõ ràng và khả năng maintain tốt.

## Review theo component
| Component | Loại | Tái sử dụng | Vấn đề | Khuyến nghị |
| --- | --- | --- | --- | --- |
| `Navbar` | layout/navigation | Trung bình | Hardcode menu, không route-aware, chỉ hoạt động tốt trên homepage, dùng anchor thuần nên `/blog` bị nav sai ngữ cảnh | Giữ concept, code lại thành `SiteHeader`, menu data-driven, anchor về `/#section` |
| `Banner` | section | Thấp | Coupling mạnh giữa content, asset và CTA; tên component generic; hero cần viết lại gần như toàn bộ | Tách thành `HeroSection` + content object |
| `Footer` | layout/contact | Trung bình | Vừa là contact section vừa là footer pháp lý; hardcode business data; thiếu social/legal | Tách `ContactSection` và `SiteFooter` hoặc ít nhất tách data |
| `page.js` | page composition | Thấp | Chứa raw JSX cho About và Product cards; content hardcode trực tiếp | Dùng page như composition layer, không chứa copy dài |
| `layout.js` | root shell | Trung bình | Gắn navbar/footer cho mọi route, khiến route `/blog` mang shell business không phù hợp | Tách route groups hoặc bỏ route phụ |
| `blog/page.js` | experimental route | Không cần cho landing | Nặng, unrelated business, kéo theo nhiều dependency | Loại bỏ hoặc chuyển sang `/lab` riêng |
| `Porche.js` | 3D scene helper | Không dùng cho landing | Tên file typo (`Porche`), unrelated business | Bỏ cùng route `/blog` |
| `Dress.js` | 3D scene helper | Không dùng cho landing | Có import thừa, `console.log`, logic thử nghiệm | Bỏ cùng route `/blog` |
| `CameraRig.js` | 3D scene helper | Không dùng cho landing | Chỉ phục vụ demo | Bỏ cùng route `/blog` |
| `Lightformers.js` | 3D scene helper | Không dùng cho landing | Chỉ phục vụ demo | Bỏ cùng route `/blog` |
| `Cube.js` | 3D scene helper | Không dùng cho landing | Không được dùng thật | Bỏ |

## Vấn đề kiến trúc chính

### 1. Content và UI đang dính chặt vào nhau
- Copy nằm trực tiếp trong JSX.
- Không có layer `content/data`.
- Đổi nội dung sẽ phải sửa component thay vì sửa data source.

### 2. Chưa có phân tầng component rõ ràng
Hiện tại mới có:
- `layout`
- `section`
- `page`

Nhưng chưa tách thành:
- `layout`
- `sections`
- `ui`
- `content`

### 3. Chưa có design system cơ bản
- Có màu qua CSS variables nhưng chưa có token naming tốt hơn.
- Spacing, radius, shadow, max-width chưa được chuẩn hóa thành primitives.
- Typography chủ yếu gắn trực tiếp bằng utility classes.

### 4. Naming còn mơ hồ
- `Banner` không mô tả đúng vai trò.
- `constantFont` là tên chưa rõ mục đích.
- `Porche` bị typo.

### 5. Client boundary đang rộng hơn cần thiết
- `src/app/page.js` dùng `"use client"` chỉ để phục vụ button click trong hero.
- Home page vì thế bị hydrate không cần thiết dù phần lớn nội dung là static.

## Kiến trúc component phù hợp hơn cho landing page

### Đề xuất layers
- `src/content/`
- `src/components/layout/`
- `src/components/sections/`
- `src/components/ui/`

### Đề xuất chia loại component
| Layer | Ví dụ |
| --- | --- |
| `content` | `site.js`, `products.js`, `faq.js`, `contact.js` |
| `layout` | `SiteHeader`, `SiteFooter`, `Container` |
| `sections` | `HeroSection`, `WhyChooseUsSection`, `ProductSection`, `ProcessSection`, `FAQSection`, `ContactSection` |
| `ui` | `Button`, `SectionHeading`, `Badge`, `Card`, `Stat`, `IconLabel` |

## Kết luận
Phần code business hiện tại nhỏ nên refactor rất dễ. Đây là dạng codebase nên tái tổ chức sớm thay vì vá tiếp, vì gần như chưa có technical debt phức tạp ngoài sự lẫn lộn giữa static marketing site và 3D demo.
