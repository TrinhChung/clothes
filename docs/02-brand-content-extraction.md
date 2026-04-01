# Brand And Content Extraction

## Phân loại dữ liệu
- `Direct from source`: có mặt trực tiếp trong code hoặc asset.
- `Inferred from source`: suy luận hợp lý từ nhiều tín hiệu trong repo.
- `Missing`: chưa có dữ liệu đủ tin cậy trong source.

## Direct From Source

### Tên thương hiệu
| Dữ liệu | Nguồn | Ghi chú |
| --- | --- | --- |
| `Fabricon` | `Navbar`, `Footer`, metadata, domain `fabricon.noirsteed.com` | Tên đang xuất hiện nhiều nhất |
| `Xưởng may LAN CHUẨN` | `Banner`, footer copyright cũ, Google Maps place name | Tạo ra xung đột brand |

### Slogan / thông điệp
| Nội dung | Nguồn |
| --- | --- |
| `Chất lượng vượt trội - Dịch vụ chuyên nghiệp - Giá thành hợp lý` | `src/components/Banner.js` |

### Mô tả doanh nghiệp
| Nội dung | Nguồn |
| --- | --- |
| `Chúng tôi là xưởng may chuyên sản xuất quần áo thời trang với hơn 10 năm kinh nghiệm. Đội ngũ nhân viên tay nghề cao, máy móc hiện đại và quy trình sản xuất khép kín đảm bảo mang đến những sản phẩm tốt nhất cho khách hàng.` | `src/app/page.js` |

### Sản phẩm / dịch vụ được nhắc tới
| Dữ liệu | Loại |
| --- | --- |
| Áo sơ mi | Product card |
| Quần tây | Product card |
| Đồng phục công sở | Product card |
| May đo quần áo thời trang | Metadata description |
| Đồng phục học sinh | Metadata keywords |
| Xưởng may tận gốc / xưởng may giá rẻ | Metadata keywords |

### Contact info
| Dữ liệu | Nguồn |
| --- | --- |
| `0965628195` | Footer, CTA tel |
| `chungtrinh2k2@gmail.com` | Footer |
| Google Maps embed của `Xưởng May Lan Chuẩn` | Footer iframe |
| Domain `fabricon.noirsteed.com` | `CNAME`, metadata canonical/url |

### CTA text hiện có
| CTA | Nguồn |
| --- | --- |
| `Liên hệ ngay` | Hero button |
| Menu `Liên hệ` | Navbar anchor |

### Logo / hình ảnh nhận diện
| Asset | Mô tả |
| --- | --- |
| `public/Images/logo.png` | Logo dạng ký tự tạo hình từ vải/denim, dùng cả cho navbar và favicon |
| `src/app/favicon.ico` | Cùng visual với logo |

### Brand color và font
| Loại | Giá trị | Nguồn |
| --- | --- | --- |
| Background | `#ffffff` | `globals.css` |
| Foreground | `#171717` | `globals.css` |
| Main yellow | `#efc249` | `globals.css` |
| Main green/navy | `#2b446c` | `globals.css` |
| Main jean | `#2b446c` | `globals.css` |
| Font chính | Geist Sans local font | `constantFont.js`, `layout.js` |
| Font mono | Geist Mono local font | `constantFont.js` |

### Social links
Không có social link nào trong source.

### FAQ / testimonial / review
Không có FAQ, review, testimonial hoặc client logo trong source.

## Inferred From Source

### Lĩnh vực hoạt động
Xưởng may / may mặc / gia công quần áo / đồng phục.

### Mô hình khách hàng
Chưa rõ hoàn toàn, nhưng có dấu hiệu pha trộn:
- B2B: đồng phục công sở, đồng phục học sinh, xưởng may tận gốc
- B2C hoặc made-to-order: may đo quần áo thời trang

### Thông điệp chính
Thương hiệu đang cố truyền tải hình ảnh:
- xưởng may chuyên nghiệp
- có kinh nghiệm
- có máy móc và quy trình
- giá hợp lý

### Điểm khác biệt cạnh tranh tạm suy luận được
- hơn 10 năm kinh nghiệm
- đội ngũ tay nghề cao
- máy móc hiện đại
- quy trình khép kín
- giá hợp lý

Lưu ý: đây mới là claim text, chưa có bằng chứng hỗ trợ.

## Missing Or Unclear
- Tên thương hiệu chính thức: `Fabricon` hay `Lan Chuẩn`
- Tên pháp lý doanh nghiệp
- Địa chỉ dạng text đầy đủ
- Chân dung khách hàng mục tiêu
- Dịch vụ chính xác:
  - gia công OEM/ODM
  - may đồng phục
  - may đo retail
  - nhận đơn theo MOQ nào
- Khu vực phục vụ
- Zalo / Facebook / Instagram / sàn TMĐT nếu có
- Quy mô xưởng, công suất, máy móc
- Chất liệu, danh mục ngành hàng chính
- Chính sách báo giá, lead time, MOQ
- Review, case study, khách hàng, đối tác
- Chứng chỉ, QC, tiêu chuẩn chất lượng

## Nhận định brand hiện tại
Brand có lõi hình ảnh khá rõ về màu sắc và logo, nhưng identity bằng ngôn từ đang thiếu nhất quán. Tên miền, metadata, navbar và footer dùng `Fabricon`, trong khi hero, map place và copy khác lại nhắc `Lan Chuẩn`. Đây là vấn đề số 1 cần chốt trước khi redesign.
