import { createPageMetadata } from "@/lib/seo";
import { getServicePageById, servicePages } from "@/lib/site";

export const dynamicParams = false;

// Server component with static params
export async function generateStaticParams() {
  return servicePages.map(({ id }) => ({ id }));
}

export function generateMetadata({ params }) {
  const service = getServicePageById(params.id);

  return createPageMetadata({
    title: service.name,
    description: service.description,
    path: service.path,
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getServicePageById(params.id);

  return (
    <div className="relative">
{/*  SideNavBar  */}
<aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-slate-50 dark:bg-slate-900 border-r-0 z-40 pt-24 p-4 gap-2">
<div className="px-2 mb-6">
<h2 className="text-lg font-bold text-blue-950 dark:text-white font-headline">Quy trình</h2>
<p className="text-[10px] text-slate-500 font-label uppercase tracking-widest">Sản xuất Lan Chuẩn</p>
</div>
<nav className="flex flex-col gap-2">
<a className="text-slate-500 dark:text-slate-400 flex items-center gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label text-xs uppercase tracking-wider">Nhận mẫu</span>
</a>
<a className="text-slate-500 dark:text-slate-400 flex items-center gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">content_cut</span>
<span className="font-label text-xs uppercase tracking-wider">Cắt vải</span>
</a>
<a className="text-blue-900 dark:text-blue-300 font-bold flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm hover:translate-x-1" href="#">
<span className="material-symbols-outlined">apparel</span>
<span className="font-label text-xs uppercase tracking-wider">May mẫu</span>
</a>
<a className="text-slate-500 dark:text-slate-400 flex items-center gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">fact_check</span>
<span className="font-label text-xs uppercase tracking-wider">Kiểm soát</span>
</a>
<a className="text-slate-500 dark:text-slate-400 flex items-center gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-label text-xs uppercase tracking-wider">Đóng gói</span>
</a>
</nav>
</aside>
<main className="lg:ml-64 pt-20">
{/*  Hero Section  */}
<section className="relative h-[819px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 z-0">
<img alt="Xưởng may Lan Chuẩn" className="w-full h-full object-cover opacity-40" data-alt="industrial garment factory interior with rows of sewing machines and focused workers in soft natural workshop lighting" src="/Images/google/service-hero-factory.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
</div>
<div className="relative z-10 px-8 md:px-16 max-w-4xl">
<h1 className="text-5xl md:text-7xl font-black text-white font-headline leading-tight tracking-tighter mb-6">
                    {service.name}
</h1>
<p className="text-xl text-on-primary-container font-body leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary hover:bg-on-secondary-container text-white px-8 py-4 rounded-md font-headline font-bold uppercase transition-all flex items-center gap-2">
                        Yêu cầu báo giá ngay <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-md font-headline font-bold uppercase transition-all flex items-center gap-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span> Liên hệ Zalo
                    </button>
</div>
</div>
</section>
{/*  Services Section  */}
<section className="py-24 px-8 md:px-16 bg-surface">
<div className="mb-16">
<h2 className="text-4xl font-black text-primary font-headline mb-4 uppercase tracking-tighter">Danh mục dịch vụ</h2>
<div className="h-1.5 w-24 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/*  Service Card 1  */}
<div className="bg-surface-container-lowest group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
<div className="h-48 overflow-hidden">
<img alt="May gia công thời trang" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="close-up of a high-end designer blazer with intricate stitching details on a professional garment rack" src="/Images/google/service-fashion-manufacturing.webp"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="material-symbols-outlined text-secondary mb-4 text-4xl">checkroom</span>
<h3 className="text-xl font-bold text-primary font-headline mb-4">May gia công thời trang</h3>
<p className="text-on-surface-variant font-body mb-6 flex-grow">Đáp ứng tiêu chuẩn xuất khẩu và nội địa cho các thương hiệu Local Brand và quốc tế.</p>
<ul className="space-y-2 mb-6 font-label text-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Kỹ thuật may tinh xảo</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Đa dạng phân khúc</li>
</ul>
</div>
</div>
{/*  Service Card 2  */}
<div className="bg-surface-container-lowest group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
<div className="h-48 overflow-hidden">
<img alt="Sản xuất đồng phục" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="group of professional employees wearing high-quality matching corporate uniforms in a modern office lobby" src="/Images/google/service-uniform-production.webp"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="material-symbols-outlined text-secondary mb-4 text-4xl">business_center</span>
<h3 className="text-xl font-bold text-primary font-headline mb-4">Đồng phục doanh nghiệp</h3>
<p className="text-on-surface-variant font-body mb-6 flex-grow">Giải pháp nhận diện thương hiệu qua trang phục công sở cao cấp, bền bỉ.</p>
<ul className="space-y-2 mb-6 font-label text-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Thiết kế theo nhận diện</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Chất liệu thoáng mát</li>
</ul>
</div>
</div>
{/*  Service Card 3  */}
<div className="bg-surface-container-lowest group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
<div className="h-48 overflow-hidden">
<img alt="May mẫu &amp; Nhảy size" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="hands of a pattern maker using a ruler and chalk on fabric layout on a large drafting table" src="/Images/google/service-pattern-making.webp"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="material-symbols-outlined text-secondary mb-4 text-4xl">straighten</span>
<h3 className="text-xl font-bold text-primary font-headline mb-4">May mẫu &amp; Nhảy size</h3>
<p className="text-on-surface-variant font-body mb-6 flex-grow">Hỗ trợ từ khâu phác thảo, làm rập, may mẫu đối chiếu và phóng size chính xác.</p>
<ul className="space-y-2 mb-6 font-label text-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Độ chính xác thông số cao</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Form dáng chuẩn</li>
</ul>
</div>
</div>
{/*  Service Card 4  */}
<div className="bg-surface-container-lowest group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
<div className="h-48 overflow-hidden">
<img alt="Tư vấn chất liệu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="colorful rolls of high-quality textile fabrics stacked in a textile warehouse with soft side lighting" src="/Images/google/service-fabric-consulting.webp"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="material-symbols-outlined text-secondary mb-4 text-4xl">inventory_2</span>
<h3 className="text-xl font-bold text-primary font-headline mb-4">Tư vấn chất liệu vải</h3>
<p className="text-on-surface-variant font-body mb-6 flex-grow">Kho nguyên liệu đa dạng, tư vấn loại vải phù hợp nhất với công năng sản phẩm.</p>
<ul className="space-y-2 mb-6 font-label text-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Nguồn cung bền vững</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-secondary">circle</span> Đa dạng vân vải</li>
</ul>
</div>
</div>
</div>
</section>
{/*  Process Section  */}
<section className="py-24 px-8 md:px-16 bg-surface-container-low">
<div className="text-center mb-16">
<h2 className="text-4xl font-black text-primary font-headline mb-4 uppercase tracking-tighter">Quy trình làm việc</h2>
<p className="text-on-surface-variant font-body max-w-2xl mx-auto">Sáu bước tối ưu hóa để đảm bảo chất lượng từ ý tưởng đến thành phẩm cuối cùng.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
{/*  Step 1  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">01</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">Tiếp nhận yêu cầu</h4>
<p className="text-on-surface-variant text-sm font-body">Lắng nghe ý tưởng, số lượng và các yêu cầu kỹ thuật đặc biệt của khách hàng.</p>
</div>
</div>
{/*  Step 2  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">02</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">Tư vấn &amp; Báo giá</h4>
<p className="text-on-surface-variant text-sm font-body">Đề xuất phương án thi công tối ưu và cung cấp bảng báo giá chi tiết, cạnh tranh.</p>
</div>
</div>
{/*  Step 3  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">03</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">May mẫu đối chiếu</h4>
<p className="text-on-surface-variant text-sm font-body">Tiến hành may mẫu để khách hàng kiểm tra form dáng, đường kim mũi chỉ và chất liệu.</p>
</div>
</div>
{/*  Step 4  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">04</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">Ký kết &amp; Sản xuất</h4>
<p className="text-on-surface-variant text-sm font-body">Sau khi duyệt mẫu, hai bên ký kết hợp đồng và triển khai sản xuất hàng loạt.</p>
</div>
</div>
{/*  Step 5  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">05</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">Kiểm tra chất lượng</h4>
<p className="text-on-surface-variant text-sm font-body">Quy trình QC nghiêm ngặt, kiểm tra từng sản phẩm trước khi chuyển sang đóng gói.</p>
</div>
</div>
{/*  Step 6  */}
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold">06</div>
<div>
<h4 className="text-lg font-bold text-primary font-headline mb-2">Giao hàng</h4>
<p className="text-on-surface-variant text-sm font-body">Đóng gói chuyên nghiệp và vận chuyển đúng tiến độ theo thỏa thuận.</p>
</div>
</div>
</div>
</section>
{/*  Commitment Section  */}
<section className="py-24 px-8 md:px-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
<div className="md:w-1/2">
<div className="relative">
<img alt="Chất lượng Lan Chuẩn" className="w-full h-[500px] object-cover rounded-sm" data-alt="close-up of a tailor's hands using a needle and thread on high-quality navy blue wool fabric with shallow depth of field" src="/Images/google/service-quality-closeup.webp"/>
<div className="absolute -bottom-6 -right-6 bg-secondary p-8 text-white hidden lg:block">
<p className="font-headline font-black text-4xl">100%</p>
<p className="font-label text-xs uppercase tracking-widest">Kiểm soát chất lượng</p>
</div>
</div>
</div>
<div className="md:w-1/2">
<h2 className="text-4xl font-black text-primary font-headline mb-8 uppercase tracking-tighter">Cam kết từ Lan Chuẩn</h2>
<div className="space-y-8">
<div className="flex gap-4">
<span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
<div>
<h4 className="text-xl font-bold font-headline text-primary mb-2">Đúng tiến độ</h4>
<p className="text-on-surface-variant font-body">Chúng tôi hiểu giá trị của thời gian. Mọi đơn hàng đều được cam kết giao đúng ngày đã thỏa thuận.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-secondary text-3xl">precision_manufacturing</span>
<div>
<h4 className="text-xl font-bold font-headline text-primary mb-2">Đường may tinh xảo</h4>
<p className="text-on-surface-variant font-body">Tỉ mỉ trong từng đường kim mũi chỉ, đảm bảo sản phẩm không chỉ bền mà còn thẩm mỹ cao.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
<div>
<h4 className="text-xl font-bold font-headline text-primary mb-2">Kiểm tra 100%</h4>
<p className="text-on-surface-variant font-body">Mọi sản phẩm đều đi qua quy trình kiểm soát chất lượng 100% trước khi rời xưởng.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Final CTA Section  */}
<section className="py-20 px-8 bg-primary text-white text-center relative overflow-hidden">
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-black font-headline mb-6 tracking-tighter">Sẵn sàng đưa thiết kế của bạn ra thực tế?</h2>
<p className="text-on-primary-container font-body mb-10 text-lg">Liên hệ với đội ngũ chuyên gia của chúng tôi để nhận tư vấn và báo giá chi tiết nhất.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="bg-secondary hover:bg-secondary-container text-white px-10 py-5 rounded-md font-headline font-bold uppercase transition-all shadow-xl">Yêu cầu báo giá ngay</button>
<button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-md font-headline font-bold uppercase transition-all backdrop-blur-sm">Tư vấn qua Zalo</button>
</div>
</div>
{/*  Decorative circle  */}
<div className="absolute -bottom-24 -left-24 w-64 h-64 border-white/5 rounded-full" style={{ border: '40px solid rgba(255,255,255,0.05)' }}></div>
</section>
</main>

    </div>
  );
}
