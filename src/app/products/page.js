import StructuredData from "@/components/StructuredData";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Danh mục sản phẩm may mặc",
  description:
    "Danh mục sản phẩm may mặc của Lan Chuẩn gồm đồng phục, sơ mi, denim, kaki và các dòng hàng sản xuất theo mẫu.",
  path: "/products",
  keywords: [
    "danh mục sản phẩm may mặc",
    "đồng phục học sinh",
    "sơ mi công sở",
    "quần denim",
  ],
});

export default function ProductsPage() {
  const productSchemas = [
    buildWebPageSchema({
      title: "Danh mục sản phẩm may mặc",
      description:
        "Trang danh mục sản phẩm giới thiệu các dòng đồng phục, sơ mi, denim, kaki và hàng may theo mẫu của Lan Chuẩn.",
      path: "/products",
      type: "CollectionPage",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Sản phẩm", path: "/products" },
    ]),
  ];

  return (
    <>
      <StructuredData data={productSchemas} />
      
<main className="pt-20">
{/*  Hero Section  */}
<section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 opacity-40">
<img alt="Industrial garment factory background" className="w-full h-full object-cover" data-alt="high-angle wide shot of a modern clean garment factory interior with organized rows of sewing machines and textile rolls under bright industrial lights" src="/Images/google/products-hero-factory.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="label-text text-secondary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">B2B Manufacturing Partner</span>
<h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        Sản xuất đa dạng dòng hàng may mặc cho thị trường sỉ trong nước
                    </h1>
<p className="text-on-primary-container text-lg md:text-xl mb-10 max-w-xl font-body leading-relaxed italic">
                        Lan Chuẩn cung cấp nguồn hàng ổn định cho các đầu mối, đại lý và shop thời trang. Nhận may đồng phục, sơ mi, quần jean, đồ denim và hàng theo mẫu với số lượng lớn.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider hover:bg-secondary-container transition-all">Xem danh mục</button>
<button className="bg-transparent border border-outline-variant text-white px-8 py-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all">Yêu cầu báo giá</button>
</div>
</div>
<div className="hidden md:block relative">
<div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden shadow-2xl transform rotate-2">
<img alt="Mẫu vải denim cao cấp và áo sơ mi trắng trên bàn cắt may" className="w-full h-full object-cover" data-alt="close-up of premium dark denim fabric and a crisp white shirt stacked neatly on a wooden tailor table with sunlight" src="/Images/google/products-denim-and-shirt.png"/>
</div>
<div className="absolute -bottom-8 -left-8 p-8 bg-secondary text-on-secondary rounded-lg shadow-xl max-w-xs transform -rotate-3">
<p className="font-body italic text-lg leading-snug">"Tối ưu chi phí sản xuất cho các đại lý Ninh Hiệp và Đồng Xuân."</p>
</div>
</div>
</div>
</section>
{/*  Product Capability Intro  */}
<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7">
<h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Năng lực sản xuất toàn diện</h2>
<p className="text-xl text-on-surface-variant font-body leading-relaxed">
                        Chúng tôi am hiểu sâu sắc đặc thù của thị trường sỉ nội địa, từ các đầu mối lớn tại <span className="text-secondary font-bold">Ninh Hiệp, Đồng Xuân</span> đến các chuỗi cửa hàng thời trang thiết kế. Với dây chuyền hiện đại, Lan Chuẩn tối ưu hóa giá thành dựa trên số lượng đơn hàng, đảm bảo biên lợi nhuận tốt nhất cho đối tác.
                    </p>
</div>
<div className="md:col-span-5 grid grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-low rounded-xl">
<div className="text-3xl font-bold text-primary mb-2">15+</div>
<div className="label-text text-xs uppercase tracking-widest text-secondary font-semibold">Năm kinh nghiệm</div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl">
<div className="text-3xl font-bold text-primary mb-2">50k+</div>
<div className="label-text text-xs uppercase tracking-widest text-secondary font-semibold">Sản phẩm / tháng</div>
</div>
</div>
</div>
</section>
{/*  Filters & Category Grid  */}
<section className="py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
{/*  Filters  */}
<div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-outline-variant/20">
<span className="label-text text-sm font-bold uppercase text-primary">Bộ lọc:</span>
<select className="bg-white border-none rounded-md px-4 py-2 label-text text-sm shadow-sm ring-1 ring-black/5 focus:ring-secondary">
<option>Tất cả sản phẩm</option>
<option>Đồng phục</option>
<option>Thời trang sỉ</option>
<option>May theo mẫu</option>
</select>
<select className="bg-white border-none rounded-md px-4 py-2 label-text text-sm shadow-sm ring-1 ring-black/5 focus:ring-secondary">
<option>Chất liệu: Cotton</option>
<option>Denim / Jean</option>
<option>Khaki</option>
<option>Sơ mi (Lon/Thô)</option>
</select>
<select className="bg-white border-none rounded-md px-4 py-2 label-text text-sm shadow-sm ring-1 ring-black/5 focus:ring-secondary">
<option>Quy mô: &gt; 100 sp</option>
<option>&gt; 500 sp</option>
<option>&gt; 1000 sp</option>
</select>
</div>
{/*  Bento Grid Categories  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  School Uniforms  */}
<div className="md:col-span-2 group relative bg-surface-container-lowest overflow-hidden rounded-xl h-[400px]">
<img alt="Nhóm học sinh mặc đồng phục được may theo form chuẩn" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="group of students in high quality tailored school uniforms, crisp white shirts and navy blue trousers, clean studio lighting" src="/Images/google/products-school-uniforms.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="label-text bg-secondary text-on-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Uniforms</span>
<h3 className="text-3xl font-bold text-white mb-2">Đồng phục học sinh</h3>
<p className="text-surface-variant max-w-md">Bền bỉ, form dáng chuẩn, chất vải thoáng mát cho hoạt động cả ngày.</p>
</div>
</div>
{/*  Shirts  */}
<div className="group relative bg-surface-container-lowest overflow-hidden rounded-xl h-[400px]">
<img alt="Các mẫu áo sơ mi cotton gấp gọn trên kệ trưng bày" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="neatly folded high-end cotton shirts in various pastel colors on a minimal shelf" src="/Images/google/products-folded-shirts.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="label-text bg-secondary text-on-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Essentials</span>
<h3 className="text-2xl font-bold text-white mb-2">Áo sơ mi</h3>
<p className="text-surface-variant">Sơ mi công sở, học sinh, đa dạng kiểu cổ và măng sét.</p>
</div>
</div>
{/*  Jeans/Denim  */}
<div className="group relative bg-surface-container-lowest overflow-hidden rounded-xl h-[400px]">
<img alt="Chi tiết đường may quần denim với bề mặt wash hoàn thiện" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="close up of denim jeans showing detailed stitching and high-quality wash texture, industrial aesthetic" src="/Images/google/products-denim-stitching.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="label-text bg-secondary text-on-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Denim Art</span>
<h3 className="text-2xl font-bold text-white mb-2">Quần bò / Đồ denim</h3>
<p className="text-surface-variant">Kỹ thuật wash hiện đại, giữ màu, độ bền cao cho phân khúc sỉ.</p>
</div>
</div>
{/*  Khaki/Trousers  */}
<div className="group relative bg-surface-container-lowest overflow-hidden rounded-xl h-[400px]">
<img alt="Mẫu quần kaki treo trên giá với bề mặt vải rõ nét" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="professional khaki trousers hanging on a minimalist rack, soft focus on fabric texture" src="/Images/google/products-khaki-trousers.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="label-text bg-secondary text-on-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Professional</span>
<h3 className="text-2xl font-bold text-white mb-2">Quần kaki / Quần tây</h3>
<p className="text-surface-variant">Đường may tỉ mỉ, form dáng đứng, phù hợp đồng phục cao cấp.</p>
</div>
</div>
{/*  Custom Sewing  */}
<div className="group relative bg-surface-container-lowest overflow-hidden rounded-xl h-[400px]">
<img alt="Bàn làm việc của thợ may với bản rập và mẫu vải" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="a tailor's workspace with sketches, fabric swatches and a measuring tape, creative artisanal vibe" src="/Images/google/products-tailor-workspace.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="label-text bg-secondary text-on-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Tailored</span>
<h3 className="text-2xl font-bold text-white mb-2">Hàng may theo mẫu</h3>
<p className="text-surface-variant">Nhận may theo ảnh hoặc mẫu gốc, chuẩn xác từng chi tiết.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Detailed Product Blocks  */}
<section className="py-24 space-y-32">
{/*  Category Detail 1  */}
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-square bg-surface-container rounded-2xl overflow-hidden">
<img alt="Chi tiết logo thêu trên áo đồng phục học sinh" className="w-full h-full object-cover" data-alt="close up of a school uniform logo embroidery on a high-quality polo shirt fabric" src="/Images/google/products-uniform-embroidery.png"/>
</div>
<div className="absolute -top-4 -right-4 bg-white p-6 shadow-xl rounded-lg max-w-[200px]">
<span className="material-symbols-outlined text-secondary text-3xl mb-2">verified</span>
<h4 className="font-headline font-bold text-sm">Chất lượng kiểm định</h4>
<p className="text-xs text-on-surface-variant mt-1">Đảm bảo độ bền màu và co giãn sau nhiều lần giặt.</p>
</div>
</div>
<div>
<h3 className="text-3xl font-bold text-primary mb-6">Chuyên dòng Đồng phục &amp; Sơ mi</h3>
<div className="space-y-6 font-body text-on-surface-variant">
<p><strong className="text-primary">Khách hàng mục tiêu:</strong> Trường học, doanh nghiệp, các shop thời trang nam/nữ công sở.</p>
<p><strong className="text-primary">Chất liệu:</strong> Cotton 100%, vải Lon Mỹ/Nhật, thô lụa, vải kaki pangrim chống nhăn.</p>
<p><strong className="text-primary">Khả năng xử lý:</strong> In lụa cao cấp, thêu vi tính logo độ nét cao, cắt may công nghiệp chuẩn form xuất khẩu.</p>
</div>
<button className="mt-10 text-secondary font-bold flex items-center gap-2 group">
                        Liên hệ tư vấn dòng hàng này <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
{/*  Category Detail 2  */}
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1">
<h3 className="text-3xl font-bold text-primary mb-6">Xưởng may Denim &amp; Khaki chuyên nghiệp</h3>
<div className="space-y-6 font-body text-on-surface-variant">
<p><strong className="text-primary">Khách hàng mục tiêu:</strong> Đại lý sỉ Ninh Hiệp, Đồng Xuân, các local brand cần dòng denim chất lượng.</p>
<p><strong className="text-primary">Kỹ thuật Wash:</strong> Enzyme wash, Stone wash, Acid wash tạo hiệu ứng cổ điển hoặc hiện đại tùy theo yêu cầu.</p>
<p><strong className="text-primary">Phụ liệu:</strong> Cung cấp đầy đủ nút đồng, tag da, khóa kéo YKK chính hãng theo đơn đặt hàng.</p>
</div>
<button className="mt-10 text-secondary font-bold flex items-center gap-2 group">
                        Xem bảng giá sỉ denim <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-square bg-surface-container rounded-2xl overflow-hidden">
<img alt="Máy wash denim đang vận hành trong xưởng sản xuất" className="w-full h-full object-cover" data-alt="industrial denim washing machine in operation at a factory, water and movement effects" src="/Images/google/products-denim-wash-machine.png"/>
</div>
</div>
</div>
</section>
{/*  Why Wholesalers Choose Us  */}
<section className="py-24 bg-primary text-white">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4 italic">Tại sao các nhà bán sỉ chọn Lan Chuẩn?</h2>
<p className="text-on-primary-container max-w-2xl mx-auto">Đối tác B2B tin cậy với quy trình sản xuất khép kín.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-secondary-container text-4xl mb-4">analytics</span>
<h4 className="text-lg font-bold mb-3">Hiểu thị trường sỉ</h4>
<p className="text-sm text-on-primary-container font-body leading-relaxed">Cập nhật xu hướng mẫu mã hot tại các chợ đầu mối Ninh Hiệp, Đồng Xuân.</p>
</div>
<div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-secondary-container text-4xl mb-4">payments</span>
<h4 className="text-lg font-bold mb-3">Giá thành cạnh tranh</h4>
<p className="text-sm text-on-primary-container font-body leading-relaxed">Tối ưu chi phí tại xưởng, không qua trung gian, chiết khấu cao cho đơn lớn.</p>
</div>
<div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-secondary-container text-4xl mb-4">draw</span>
<h4 className="text-lg font-bold mb-3">Hỗ trợ lên mẫu</h4>
<p className="text-sm text-on-primary-container font-body leading-relaxed">Ra mẫu nhanh trong 3-5 ngày dựa trên hình ảnh hoặc ý tưởng của khách.</p>
</div>
<div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-secondary-container text-4xl mb-4">speed</span>
<h4 className="text-lg font-bold mb-3">Tiến độ rõ ràng</h4>
<p className="text-sm text-on-primary-container font-body leading-relaxed">Cam kết thời gian giao hàng, cập nhật tiến độ sản xuất định kỳ.</p>
</div>
</div>
</div>
</section>
{/*  Ordering Process  */}
<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<h2 className="text-4xl font-bold text-primary mb-16 text-center">Quy trình đặt hàng chuyên nghiệp</h2>
<div className="relative flex flex-col md:flex-row justify-between gap-8">
{/*  Progress Line (Desktop)  */}
<div className="absolute top-1/4 left-0 w-full h-[1px] bg-outline-variant/30 hidden md:block -z-10"></div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">1</div>
<h5 className="font-bold text-sm uppercase mb-2">Gửi yêu cầu</h5>
<p className="text-xs text-on-surface-variant font-body">Zalo, Hotline hoặc Email</p>
</div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">2</div>
<h5 className="font-bold text-sm uppercase mb-2">Tư vấn</h5>
<p className="text-xs text-on-surface-variant font-body">Chọn vải, chốt số lượng</p>
</div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">3</div>
<h5 className="font-bold text-sm uppercase mb-2">Báo giá</h5>
<p className="text-xs text-on-surface-variant font-body">Giá tốt nhất cho số lượng</p>
</div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">4</div>
<h5 className="font-bold text-sm uppercase mb-2">Duyệt mẫu</h5>
<p className="text-xs text-on-surface-variant font-body">May mẫu thật để duyệt</p>
</div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">5</div>
<h5 className="font-bold text-sm uppercase mb-2">Sản xuất</h5>
<p className="text-xs text-on-surface-variant font-body">Theo quy trình ISO</p>
</div>
<div className="flex-1 text-center group">
<div className="w-12 h-12 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">6</div>
<h5 className="font-bold text-sm uppercase mb-2">Giao hàng</h5>
<p className="text-xs text-on-surface-variant font-body">Giao tận nơi toàn quốc</p>
</div>
</div>
</div>
</section>
{/*  B2B FAQ  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-3xl mx-auto px-8">
<h2 className="text-3xl font-bold text-primary mb-12 text-center">Câu hỏi thường gặp (B2B FAQ)</h2>
<div className="space-y-4">
<details className="bg-white rounded-lg shadow-sm overflow-hidden group" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline font-bold text-primary">
                            Số lượng tối thiểu (MOQ) cho mỗi đơn hàng là bao nhiêu?
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 font-body text-on-surface-variant border-t border-surface-container">
                            Tùy theo dòng hàng, thông thường MOQ từ 100 sản phẩm/mẫu. Đối với các đơn sỉ Ninh Hiệp hoặc hàng denim cần wash, số lượng lý tưởng là trên 500 sản phẩm để có mức giá tối ưu nhất.
                        </div>
</details>
<details className="bg-white rounded-lg shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline font-bold text-primary">
                            Xưởng có nhận may theo mẫu ảnh từ khách hàng không?
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 font-body text-on-surface-variant border-t border-surface-container">
                            C��, chúng tôi có đội ngũ ra rập chuyên nghiệp có thể dựng mẫu từ hình ảnh hoặc bản vẽ phác thảo của khách hàng.
                        </div>
</details>
<details className="bg-white rounded-lg shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline font-bold text-primary">
                            Thời gian hoàn thành một đơn hàng lớn là bao lâu?
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 font-body text-on-surface-variant border-t border-surface-container">
                            Trung bình từ 15-25 ngày kể từ ngày duyệt mẫu và đặt cọc, tùy thuộc vào độ phức tạp của mẫu và số lượng đơn hàng hiện tại của xưởng.
                        </div>
</details>
<details className="bg-white rounded-lg shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-headline font-bold text-primary">
                            Lan Chuẩn có hỗ trợ in/thêu thương hiệu riêng không?
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 font-body text-on-surface-variant border-t border-surface-container">
                            Chúng tôi cung cấp dịch vụ trọn gói bao gồm in, thêu, làm nhãn mác thương hiệu riêng (OEM/ODM) để khách hàng có thể kinh doanh ngay khi nhận hàng.
                        </div>
</details>
</div>
</div>
</section>
{/*  CTA Final  */}
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-8 bg-surface-container-high rounded-3xl p-12 text-center shadow-sm relative overflow-hidden">
<div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
<h2 className="text-4xl font-bold text-primary mb-6">Bắt đầu sản xuất ngay hôm nay</h2>
<p className="text-on-surface-variant mb-10 max-w-xl mx-auto font-body italic">Nhận tư vấn chuyên sâu về chất liệu và báo giá cạnh tranh nhất cho đơn hàng sỉ của bạn.</p>
<div className="flex flex-wrap justify-center gap-6">
<button className="bg-primary text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-primary/20 transition-all">Yêu cầu báo giá ngay</button>
<button className="bg-white text-primary border border-primary/20 px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-primary/5 transition-all">Gửi mẫu cần may</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}

    </>
  );
}
