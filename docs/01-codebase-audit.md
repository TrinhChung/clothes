# Codebase Audit

## Kết luận kiến trúc
- Router: App Router.
- Framework: Next.js 14.
- Rendering target: static export qua `next export` style mới (`output: "export"`).
- Source code root: `src/`.
- Route business chính: `/`.
- Route phụ không liên quan trực tiếp đến landing page: `/blog`.

## Cấu trúc chính
| Khu vực | File/thư mục | Vai trò |
| --- | --- | --- |
| App shell | `src/app/layout.js` | Metadata toàn site, inject font, render `Navbar` và `Footer` cho mọi route |
| Landing page | `src/app/page.js` | Nội dung chính của homepage |
| Route phụ | `src/app/blog/page.js` | Demo 3D canvas |
| Shared components | `src/components/*` | `Navbar`, `Banner`, `Footer` |
| Global styles | `src/styles/globals.css` | Tailwind base + CSS variables + animation |
| Font setup | `src/utils/constantFont.js` | Load local Geist fonts |
| Public assets | `public/Images`, `public/models` | Ảnh thương hiệu, hero, OG, model 3D |
| Build artifact | `out/` | Static output đã generate sẵn |

## Entry points và route map
| Route | Source | Mục đích hiện tại | Đánh giá |
| --- | --- | --- | --- |
| `/` | `src/app/page.js` | Landing page xưởng may | Đây là route cần redesign |
| `/blog` | `src/app/blog/page.js` | Demo 3D với canvas và GLB models | Legacy/experimental, không phù hợp landing page business |

## Landing page hiện tại được ghép từ đâu
| Khối | File nguồn | Ghi chú |
| --- | --- | --- |
| Header/Nav | `src/components/Navbar.js` | Hardcode menu, logo, anchor links |
| Hero/Banner | `src/components/Banner.js` | Hardcode H1, slogan, CTA gọi điện, ảnh minh họa |
| About | `src/app/page.js` | 1 section text duy nhất |
| Product cards | `src/app/page.js` | 3 card hardcode |
| Contact/Footer | `src/components/Footer.js` | Phone, email, map embed |

## Content đang hardcode ở đâu
- Metadata SEO: `src/app/layout.js`
- Tên thương hiệu trong UI: `src/components/Navbar.js`, `src/components/Footer.js`, `src/components/Banner.js`
- Hero copy: `src/components/Banner.js`
- About copy và danh mục sản phẩm: `src/app/page.js`
- Contact info: `src/components/Footer.js`
- Color tokens: `src/styles/globals.css`

## Style đang quản lý theo cách nào
- Tailwind utility classes cho hầu hết layout và typography.
- CSS variables trong `:root` cho màu nền/chữ và brand colors.
- Một animation custom `infiniteSlide` dùng cho background hero.
- Không có design token layer riêng cho spacing, radius, shadows, content widths.
- Không có component UI primitives riêng.

## Assets đang nằm ở đâu
- Logo, hero, background, OG image: `public/Images/`
- Favicon: `src/app/favicon.ico`
- Model 3D: `public/models/`
- SVG mặc định từ starter template vẫn còn trong `public/`

## Phần nào là legacy hoặc dư thừa
- Toàn bộ route `/blog` và các file trong `src/app/blog/`
- `public/models/*`
- Dependencies 3D: `@react-three/drei`, `@react-three/fiber`, `three`, `lamina`, `three-stdlib`
- `replace-in-file` và `replace-in-files-cli` không thấy được dùng trong source
- SVG mặc định: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- `out/` được commit vào repo làm tăng nhiễu và dễ stale

## Phần nào có thể tái sử dụng
- Logo/fav icon hiện có
- Color palette vàng + xanh đậm
- Cấu trúc header/footer ở mức skeleton
- Nhóm nội dung cốt lõi hiện có:
  - xưởng may
  - 10+ năm kinh nghiệm
  - máy móc hiện đại
  - quy trình khép kín
  - giá hợp lý
- Grid card sản phẩm có thể dùng lại về concept, nhưng nên code lại

## Phần nào nên bỏ khi redesign landing page
- Route `/blog` khỏi navigation/business shell hoặc bỏ hẳn
- Hero art hiện tại nếu mục tiêu là trust-driven landing page
- Background chữ `FASHION` nhiều màu
- OG image hiện tại
- Hardcoded content rải trong component
- Artifact `out/` như nguồn chỉnh sửa thủ công

## Phát hiện quan trọng
- `src/` và `out/` không còn đồng nhất.
- Trong `src/components/Banner.js` H1 là `Xưởng may LAN CHUẨN`, nhưng artifact đã build trong `out/` đang hiển thị `Xưởng may FABRICON`.
- Điều này xác nhận `out/` không đáng tin để dùng tiếp cho redesign/content audit.
