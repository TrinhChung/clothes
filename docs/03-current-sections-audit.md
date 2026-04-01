# Current Sections Audit

## Phạm vi audit
Audit này chỉ dùng source code hiện tại làm căn cứ chính. `out/` chỉ được dùng để phát hiện artifact stale.

## Existing Sections

| Section | File nguồn | Route sử dụng | Nội dung hiện tại | Purpose hiện tại | Đánh giá | Thiếu / nên viết lại |
| --- | --- | --- | --- | --- | --- | --- |
| Navbar | `src/components/Navbar.js` | Tất cả route qua `layout.js` | Logo, text `Fabricon`, menu `Home`, `Giới thiệu`, `Sản phẩm`, `Liên hệ` | Điều hướng cơ bản | Dùng được ở mức skeleton nhưng rất generic; trộn tiếng Anh và tiếng Việt | Nên thêm CTA rõ hơn, sửa anchor cho route khác, thống nhất ngôn ngữ |
| Hero / Banner | `src/components/Banner.js` | `/` | H1 `Xưởng may LAN CHUẨN`, slogan, CTA `Liên hệ ngay`, ảnh minh họa thời trang nữ, background chữ `FASHION` | Giới thiệu nhanh và kích hoạt gọi điện | Có CTA nhưng clarity yếu vì brand mâu thuẫn và hình ảnh không tạo trust cho xưởng may chuyên nghiệp | Cần viết lại H1, subcopy, trust bullets, thay ảnh thực tế, chuyển CTA thành link tĩnh |
| About | `src/app/page.js` | `/` | Đoạn giới thiệu 10+ năm kinh nghiệm, tay nghề cao, máy móc hiện đại, quy trình khép kín | Trình bày năng lực tổng quan | Đây là đoạn content có giá trị nhất trong homepage hiện tại | Cần tách thành USP rõ ràng, thêm dữ liệu chứng minh |
| Product categories | `src/app/page.js` | `/` | 3 card: Áo sơ mi, Quần tây, Đồng phục công sở | Cho biết danh mục | Quá ít chiều sâu; chưa nói rõ nhận gia công gì, đối tượng nào, lợi ích gì | Nên mở rộng thành section dịch vụ/sản phẩm có ảnh, use case, MOQ/lead time nếu có |
| Footer / Contact | `src/components/Footer.js` | Tất cả route qua `layout.js` | Heading `Xưởng may Fabricon`, phone, email Gmail cá nhân, copyright, map embed | Chốt contact | Có contact thật nhưng trust còn thấp do thiếu địa chỉ text, pháp lý, social, giờ làm việc | Cần nâng cấp thành contact section đầy đủ và footer pháp lý |
| `/blog` demo 3D | `src/app/blog/page.js` và `src/app/blog/*` | `/blog` | Canvas 3D với model dress và car | Demo kỹ thuật/experiment | Không liên quan đến business website | Nên bỏ khỏi public site hoặc tách sang sandbox/lab |

## Missing Sections

| Section mong đợi | Hiện trạng | Tác động |
| --- | --- | --- |
| Why choose us | Không có | Người dùng không thấy lý do chọn xưởng |
| Quy trình làm việc | Không có | Khó hình dung cách hợp tác, báo giá, sản xuất |
| Năng lực sản xuất / stats | Không có | Không đủ trust cho khách có nhu cầu đặt may |
| Gallery / ảnh thực tế | Không có | Không chứng minh chất lượng |
| Review / đối tác / khách hàng | Không có | Thiếu social proof |
| FAQ | Không có | Thiếu nội dung giải đáp trước khi liên hệ |
| Chính sách / pháp lý | Không có | Thiếu trust và yếu cho SEO |
| CTA block giữa trang | Không có | Toàn bộ chuyển đổi dồn về hero và footer |

## Nội dung text đang có

### Hero
- H1: `Xưởng may LAN CHUẨN`
- Subcopy: `Chất lượng vượt trội - Dịch vụ chuyên nghiệp - Giá thành hợp lý`
- CTA: `Liên hệ ngay`

### About
`Chúng tôi là xưởng may chuyên sản xuất quần áo thời trang với hơn 10 năm kinh nghiệm. Đội ngũ nhân viên tay nghề cao, máy móc hiện đại và quy trình sản xuất khép kín đảm bảo mang đến những sản phẩm tốt nhất cho khách hàng.`

### Product cards
- `Áo sơ mi` - `Thiết kế đa dạng, chất liệu cao cấp.`
- `Quần tây` - `May đo chuẩn xác, đường nét tinh tế.`
- `Đồng phục công sở` - `Đồng phục bền đẹp, giá cả hợp lý.`

### Contact
- `0965628195`
- `chungtrinh2k2@gmail.com`

## Nhận định content
- Phần text hiện tại ngắn, dễ đọc, nhưng ở mức brochure sơ khai.
- Chưa có nội dung nào đủ sức thay cho một landing page bán hàng/thu lead thực sự.
- Các claim đều ở dạng tự giới thiệu, chưa có proof.
- Voice hiện tại thiên mô tả chung chung, chưa có định vị sắc nét.
