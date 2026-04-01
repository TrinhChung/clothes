# Assets Audit

## Inventory chính
| Asset | Kích thước | Vai trò hiện tại | Đánh giá | Khuyến nghị |
| --- | --- | --- | --- | --- |
| `public/Images/logo.png` | 265x265, 126.9 KB | Logo navbar | Có cá tính và phù hợp ngành vải may | Giữ, xuất thêm phiên bản nền sáng/tối nếu cần |
| `src/app/favicon.ico` | 265x265, 126.9 KB | Favicon | Đồng bộ với logo | Giữ |
| `public/Images/banner.png` | 1500x1338, 882.8 KB | Ảnh hero | Là minh họa thời trang nữ, thiếu trust cho landing page xưởng may | Thay bằng ảnh xưởng/sản phẩm thực tế hoặc concept mới |
| `public/Images/background_banner.png` | 2058x395, 39.1 KB | Background hero | Chữ `FASHION` nhiều màu, không đồng nhất brand công nghiệp/chuyên nghiệp | Nên bỏ hoặc thay bằng texture/shape tinh tế hơn |
| `public/Images/meta.jpg` | 4480x6720, 1416.5 KB | OG/social preview | Ảnh chân dung cá nhân, không đúng business context | Phải thay ngay |
| `public/models/911-transformed.glb` | 3.3 MB | Model 3D route `/blog` | Không liên quan business | Bỏ nếu không dùng |
| `public/models/dress_for_kids_design_patent.glb` | 9.4 MB | Model 3D route `/blog` | Không liên quan landing page và khá nặng | Bỏ nếu không dùng |
| `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` | nhỏ | Asset mặc định từ template | Không dùng trong business site | Xóa hoặc ignore |

## Đánh giá trực quan

### Logo
- Điểm mạnh:
  - có chất liệu denim/vải, liên quan ngành may
  - màu vàng và xanh đậm tạo nhận diện rõ
- Điểm yếu:
  - cần guideline dùng logo đầy đủ hơn nếu triển khai branding mới

### Hero image
- Là ảnh minh họa thời trang nữ phong cách editorial.
- Không chứng minh năng lực sản xuất thực tế.
- Có thể phù hợp nếu site định vị fashion studio/lookbook, nhưng không mạnh cho xưởng may conversion-driven.

### Background hero
- Mang cảm giác fashion/lifestyle.
- Không hỗ trợ thông điệp `xưởng may chuyên nghiệp`.
- Dễ làm hero trông rối nếu kết hợp với nhiều text.

### OG image
- Không mô tả sản phẩm, dịch vụ, xưởng hay logo rõ ràng.
- Khi chia sẻ link, trust sẽ thấp.

## Asset style consistency
- Hiện tại asset không đồng nhất:
  - logo: industrial/fabric craft
  - hero: fashion illustration
  - background: typographic fashion graphic
  - OG image: chân dung cá nhân
- Đây là dấu hiệu chưa có art direction thống nhất.

## Asset còn thiếu cho landing page chuyên nghiệp
- Ảnh xưởng thực tế
- Ảnh máy móc/quy trình
- Ảnh close-up sản phẩm hoàn thiện
- Ảnh đội ngũ
- Ảnh đóng gói/giao hàng/QC
- Ảnh khách hàng hoặc case thực tế
- OG image mới đúng brand
- Bộ icon đồng nhất cho USP/process/contact

## Asset hạ tầng
- `public/CNAME` và root `CNAME`: cần cho domain custom
- `public/google1a500ef2be10d5ff.html`: dùng cho Google site verification

## Ưu tiên xử lý asset
1. Thay `meta.jpg`
2. Chuẩn bị bộ ảnh hero và gallery thực tế
3. Chuẩn hóa visual direction giữa logo, hero và background
4. Loại bỏ model 3D nếu không còn chiến lược dùng
