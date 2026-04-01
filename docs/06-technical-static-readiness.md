# Technical Static Readiness

## Kết luận
Codebase hiện tại có mức độ sẵn sàng cao để refactor sang landing page tĩnh sạch hơn. Lý do là business site hiện gần như không phụ thuộc backend hay dữ liệu động thật sự.

## Những gì đã phù hợp với static site
- Next.js App Router đã được cấu hình `output: "export"`.
- Toàn bộ nội dung chính hiện đang hardcode, không phụ thuộc API.
- Assets đều là local static assets.
- Contact flow hiện chỉ dùng `tel:` và `mailto:`.
- Không có auth, form backend, CMS, database hoặc realtime logic.

## Phần nào đang dùng logic động nhưng không cần thiết
| Khu vực | Hiện trạng | Kết luận |
| --- | --- | --- |
| Homepage | `src/app/page.js` là client component | Không cần; có thể chuyển về server component |
| Hero CTA | Dùng `onClick={() => window.location.href = "tel:..."}` | Chỉ cần `<a href="tel:...">` |
| Navbar | `useState` cho mobile menu | Hợp lý nếu giữ menu toggle |
| `/blog` | Canvas, performance monitor, 3D scene | Không phù hợp landing page static |

## Vấn đề làm giảm maintainability
- Content hardcode rải trong JSX.
- Chưa có content layer riêng.
- `out/` build artifact được commit, dễ stale.
- Metadata cấu hình sai schema ở một số field.
- Brand naming không nhất quán.
- Layout global bọc cả route business và experimental route.

## Metadata và SEO config có vấn đề kỹ thuật
- `canonical` đang đặt ở top-level metadata, nên không sinh ra canonical link.
- `openGraph.image` và `twitter.image` không sinh ra tag ảnh; nên dùng `images`.
- `author` không theo shape metadata chuẩn App Router.
- `googleSiteVerification` trong metadata không sinh meta verification; repo hiện dựa vào file verification trong `public/`.

## Readiness score theo hạng mục
| Hạng mục | Mức độ |
| --- | --- |
| Static export suitability | Cao |
| Refactor complexity | Thấp đến trung bình |
| Risk khi bỏ backend | Rất thấp |
| Risk khi viết lại sections | Thấp |
| Risk khi đổi architecture | Thấp |

## Những gì có thể bỏ hoàn toàn cho landing page
- Route `/blog`
- `src/app/blog/*`
- `public/models/*`
- Dependencies 3D
- Unused starter SVG assets
- `replace-in-file*` nếu không dùng trong workflow thật

## Những gì nên chuyển sang content object/data file
- Brand identity
- Hero copy
- Product/service list
- USP list
- Process steps
- FAQ
- Contact info
- Metadata SEO

## Kiến trúc static phù hợp hơn

### Rendering
- Server Components mặc định
- Chỉ giữ client component cho mobile menu hoặc tương tác thật sự cần thiết

### Data source
- `src/content/site.js`
- `src/content/products.js`
- `src/content/faq.js`

### Deployment
- Tiếp tục static export là hợp lý
- Nên sinh `out/` trong build/deploy pipeline thay vì dùng artifact cũ làm nguồn chỉnh tay

## Kết luận thực thi
Nếu mục tiêu là một landing page tĩnh cho xưởng may, repo này không cần nâng cấp hệ thống. Nó cần dọn kiến trúc, xóa phần 3D không liên quan, chuẩn hóa metadata và chuyển content vào data source rõ ràng.
