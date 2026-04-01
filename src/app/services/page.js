import StructuredData from "@/components/StructuredData";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { servicePages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Dịch vụ may gia công và đồng phục",
  description:
    "Khám phá các dịch vụ may gia công thời trang, đồng phục, may mẫu và tư vấn chất liệu của xưởng may Lan Chuẩn.",
  path: "/services",
  keywords: [
    "dịch vụ may gia công",
    "may đồng phục doanh nghiệp",
    "may mẫu",
    "tư vấn chất liệu vải",
  ],
});

export default function ServicesPage() {
  const serviceSchemas = [
    buildWebPageSchema({
      title: "Dịch vụ may gia công và đồng phục",
      description:
        "Trang dịch vụ tổng hợp các nhóm giải pháp may gia công, đồng phục, may mẫu và tư vấn chất liệu của Lan Chuẩn.",
      path: "/services",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Dịch vụ", path: "/services" },
    ]),
    buildItemListSchema("Danh mục dịch vụ may mặc", servicePages, "Service"),
  ];

  return (
    <>
      <StructuredData data={serviceSchemas} />
      
<main className="pt-24">
{/*  Hero Header  */}
<header className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
<div className="grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-7">
<span className="font-label text-secondary tracking-widest text-xs uppercase mb-4 block">Dịch vụ &amp; Sản phẩm</span>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight text-primary leading-none mb-8">
            Chế tác Tận tâm, <br/>Sản xuất Đẳng cấp.
          </h1>
</div>
<div className="col-span-12 lg:col-span-5 self-end">
<p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-md">
            Lan Chuẩn kết hợp quy trình công nghiệp hiện đại với sự tỉ mỉ của người thợ thủ công để mang đến những giải pháp may mặc tối ưu nhất.
          </p>
</div>
</div>
</header>
{/*  Services Section  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
<h2 className="font-headline text-3xl font-bold tracking-tight text-primary">Dịch Vụ Cốt Lõi</h2>
<div className="h-px bg-outline-variant/30 flex-grow mx-8 hidden md:block"></div>
<span className="font-label text-sm text-on-surface-variant">Giải pháp may mặc toàn diện</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 overflow-hidden rounded-xl shadow-sm">
{/*  Service Card 1  */}
<div className="bg-surface-container-lowest p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
<div>
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="apparel">apparel</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">May gia công thời trang</h3>
<p className="text-on-surface-variant mb-6 leading-relaxed">
                Chuyên đảm nhận các đơn hàng thời trang xuất khẩu và nội địa với tiêu chuẩn kỹ thuật nghiêm ngặt. Chúng tôi cam kết chất lượng đường kim mũi chỉ tinh tế trên mọi chất liệu.
              </p>
<ul className="space-y-3 font-label text-xs uppercase tracking-wider text-secondary">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Số lượng linh hoạt từ nhỏ đến lớn</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Kiểm soát QC 100% sản phẩm</li>
</ul>
</div>
</div>
{/*  Service Card 2  */}
<div className="bg-surface-container-lowest p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
<div>
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="groups">groups</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Sản xuất đồng nghiệp</h3>
<p className="text-on-surface-variant mb-6 leading-relaxed">
                Giải pháp đồng phục chuyên nghiệp cho doanh nghiệp, nhà hàng, và trường học. Thiết kế tối ưu hóa sự thoải mái và nhận diện thương hiệu.
              </p>
<ul className="space-y-3 font-label text-xs uppercase tracking-wider text-secondary">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Form dáng chuẩn, độ bền cao</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> In thêu logo sắc nét theo yêu cầu</li>
</ul>
</div>
</div>
{/*  Service Card 3  */}
<div className="bg-surface-container-lowest p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
<div>
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="content_cut">content_cut</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">May mẫu &amp; may theo yêu cầu</h3>
<p className="text-on-surface-variant mb-6 leading-relaxed">
                Hiện thực hóa ý tưởng của các nhà thiết kế từ bản vẽ đến sản phẩm thực tế. Dịch vụ may mẫu nhanh chóng, chính xác giúp tối ưu hóa thời gian tung sản phẩm.
              </p>
<ul className="space-y-3 font-label text-xs uppercase tracking-wider text-secondary">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Bảo mật mẫu mã thiết kế</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Chỉnh sửa mẫu đến khi hài lòng</li>
</ul>
</div>
</div>
{/*  Service Card 4  */}
<div className="bg-surface-container-lowest p-10 flex flex-col justify-between group transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
<div>
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" data-icon="palette">palette</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Tư vấn vải &amp; thiết kế</h3>
<p className="text-on-surface-variant mb-6 leading-relaxed">
                Hỗ trợ khách hàng lựa chọn nguồn vải chất lượng, phù hợp với công năng sử dụng và ngân sách. Tư vấn kỹ thuật may để sản phẩm đạt thẩm mỹ cao nhất.
              </p>
<ul className="space-y-3 font-label text-xs uppercase tracking-wider text-secondary">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Kho tàng vải mẫu phong phú</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span> Cập nhật xu hướng vải mới nhất</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/*  Product Portfolio Section  */}
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-16">
<h2 className="font-headline text-3xl font-bold tracking-tight text-primary mb-4">Danh mục Sản phẩm</h2>
<p className="text-on-surface-variant font-body">Tuyển tập những dự án tiêu biểu được thực hiện tại xưởng Lan Chuẩn.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Portfolio Item 1  */}
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container-high rounded-xl mb-6">
<img alt="Đồng phục công sở cao cấp do Lan Chuẩn sản xuất" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="/Images/dongphucongso.png"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-label text-xs font-bold tracking-widest uppercase">Xem Chi Tiết</span>
</div>
</div>
<h4 className="font-headline text-lg font-bold text-primary mb-1">Đồng phục công sở</h4>
<p className="text-on-surface-variant text-sm font-body">Bộ sưu tập vest và sơ mi cao cấp cho doanh nghiệp tài chính.</p>
</div>
{/*  Portfolio Item 2  */}
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container-high rounded-xl mb-6">
<img alt="Mẫu thời trang xuất khẩu do xưởng may Lan Chuẩn thực hiện" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="/Images/thoitrangxuatkhau.png"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-label text-xs font-bold tracking-widest uppercase">Xem Chi Tiết</span>
</div>
</div>
<h4 className="font-headline text-lg font-bold text-primary mb-1">Thời trang xuất khẩu</h4>
<p className="text-on-surface-variant text-sm font-body">Dòng sản phẩm váy đầm thiết kế xuất đi thị trường Châu Âu.</p>
</div>
{/*  Portfolio Item 3  */}
<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container-high rounded-xl mb-6">
<img alt="Trang phục bảo hộ lao động do Lan Chuẩn gia công" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="/Images/baoholaodong.jpg"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-label text-xs font-bold tracking-widest uppercase">Xem Chi Tiết</span>
</div>
</div>
<h4 className="font-headline text-lg font-bold text-primary mb-1">Bảo hộ lao động</h4>
<p className="text-on-surface-variant text-sm font-body">Trang phục kỹ thuật chịu lực cao cho công trình xây dựng.</p>
</div>
</div>
</div>
</section>
{/*  Call to Action  */}
<section className="max-w-7xl mx-auto px-8 mb-24">
<div className="relative overflow-hidden rounded-3xl bg-primary py-20 px-12 text-center">
{/*  Subtle texture background  */}
<div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
<img alt="Texture vải linen trắng dùng làm nền cho khối CTA dịch vụ" className="w-full h-full object-cover" data-alt="Soft abstract texture of folded white linen fabric with elegant shadows and light play" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhPvTxACQEwtTybGODxTEwf0Nj6Pj_7IUjsfLhRa4-TXDYzmajaGA-XuNolvXyMDlH0ALfgNLaFWrW96A5zdu33O7z8OSoSWRCNd8ad2EFtVtNrJPK5f5P2EdmkWt--kylM6DN73cqCsLUL38YTS3ztNC0685uM1B7gtmQmapc4RP-QboqERm1eacYv6mwO3T7JpvzPk0hYW6EvmiXhgT8lMN1TfFSVIq1JBtD8pMrdE89QoP376jULxSMe49FGiFNGiIaG6S5Z0U"/>
</div>
<div className="relative z-10">
<h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Sẵn sàng để nâng tầm <br className="hidden md:block"/> thương hiệu của bạn?</h2>
<p className="text-primary-fixed text-lg mb-10 max-w-2xl mx-auto font-body opacity-90">
            Dù là đơn hàng mẫu hay sản xuất hàng loạt, Lan Chuẩn luôn sẵn sàng đồng hành cùng bạn bằng sự chuyên nghiệp và uy tín hàng đầu.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-secondary text-white px-10 py-4 rounded-md font-headline font-bold text-base hover:bg-secondary/90 transition-all shadow-xl hover:shadow-secondary/20">
              Nhận tư vấn ngay
            </button>
<button className="bg-white/10 backdrop-blur text-white border border-white/20 px-10 py-4 rounded-md font-headline font-bold text-base hover:bg-white/20 transition-all">
              Liên hệ đặt hàng
            </button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}

    </>
  );
}
