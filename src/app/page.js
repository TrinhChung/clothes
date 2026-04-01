import Banner from "@/components/Banner";
import StructuredData from "@/components/StructuredData";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { servicePages } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Gia công may mặc, đồng phục và may mẫu",
  description:
    "Lan Chuẩn là xưởng may gia công nhận sản xuất đồng phục, hàng thời trang và may mẫu theo yêu cầu với quy trình QC nhiều lớp và tiến độ rõ ràng.",
  path: "/",
  keywords: [
    "gia công may mặc",
    "xưởng may đồng phục",
    "may mẫu theo yêu cầu",
    "xưởng may thời trang",
  ],
});

export default function HomePage() {
  const homeSchemas = [
    buildWebPageSchema({
      title: "Xưởng may gia công, đồng phục và may mẫu",
      description:
        "Trang chủ giới thiệu năng lực gia công may mặc, đồng phục và quy trình sản xuất của xưởng may Lan Chuẩn.",
      path: "/",
    }),
    buildBreadcrumbSchema([{ name: "Trang chủ", path: "/" }]),
    buildItemListSchema("Dịch vụ may mặc nổi bật", servicePages, "Service"),
  ];

  return (
    <>
      <StructuredData data={homeSchemas} />
      <Banner />
      <main className="w-full">
        {/*  Short Intro Section  */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl font-black text-primary font-headline leading-tight tracking-tight">
                  Đối tác tin cậy trong ngành <span className="italic font-body font-normal">may mặc Việt Nam.</span>
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                  Tại Lan Chuẩn, chúng tôi không chỉ sản xuất quần áo; chúng tôi hiện thực hóa ý tưởng của bạn. Với đội ngũ thợ lành nghề và quy trình quản lý chất lượng nghiêm ngặt, xưởng may của chúng tôi tự hào là đơn vị gia công hàng đầu cho các thương hiệu trong và ngoài nước.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  Key Strengths  */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-label text-secondary font-bold uppercase tracking-widest text-xs mb-2">Giá Trị Cốt Lõi</p>
              <h2 className="text-4xl font-black text-primary font-headline">Thế mạnh của chúng tôi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/*  Card 1  */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">verified</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 text-primary">Sản xuất chất lượng</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">Mỗi sản phẩm đều trải qua 3 khâu kiểm duyệt nghiêm ngặt trước khi đóng gói.</p>
              </div>
              {/*  Card 2  */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">schedule</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 text-primary">Đúng thời hạn</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">Hệ thống quản lý sản xuất hiện đại giúp đảm bảo tiến độ bàn giao chính xác.</p>
              </div>
              {/*  Card 3  */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">forum</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 text-primary">Tư vấn chuyên sâu</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">Đội ngũ chuyên gia sẵn sàng tư vấn về chất liệu và xu hướng thiết kế tối ưu.</p>
              </div>
              {/*  Card 4  */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">payments</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-4 text-primary">Chi phí hợp lý</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">Tối ưu hóa quy trình giúp chúng tôi cung cấp mức giá cạnh tranh nhất thị trường.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  Services Overview  */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <p className="font-label text-secondary font-bold uppercase tracking-widest text-xs mb-2">Dịch Vụ</p>
                <h2 className="text-4xl font-black text-primary font-headline">Giải pháp may mặc toàn diện</h2>
              </div>
              <a className="text-primary font-headline font-bold flex items-center gap-2 hover:text-secondary transition-colors group" href="/services">
                Xem tất cả dịch vụ
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cận cảnh máy may công nghiệp đang hoàn thiện sản phẩm thời trang" data-alt="Close up of professional sewing machine stitching a piece of beige suit fabric with precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGzY6vcrkMkp-ktbVHt9UMroEFcrGKYFndKagqFlEr0Gt6eSGsmy7RgrGoRXUnpGryqKXnvrx5toI_gVsUKN5US7oXkhgC39ON_XILLyl0IZEOEhJp1Ch4awtNsFV-uEoFD-NDMf0R8Bm25vNQLaYNTRUxUG5c0fJCS4tO-TSjmrgNiXu7-mYYjJjs8yAx-DxGN7ScUyfGGu_clnhcWReV72NLKVItBd85r4Jrj38NiLs3F5-XBvyfhF6528sduwPtaj-Cpqz5EJo"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white font-headline mb-2">Sản xuất gia công</h3>
                  <p className="text-surface-variant font-body mb-4">Gia công theo đơn đặt hàng với số lượng linh hoạt, từ thiết kế đến thành phẩm.</p>
                  <a className="text-secondary-fixed font-label text-xs uppercase font-bold tracking-widest hover:text-white transition-colors" href="/services">Xem thêm</a>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl h-[400px]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Bộ sưu tập đồng phục công sở treo trên giá trong xưởng may" data-alt="A row of neatly hung corporate uniforms and office attire in various shades of navy and grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeAHGyYRZdk34vMs96rdlnst1-Fa_NP9_-meCXpj7im18mKcKYB0AS02CNEv3lcD-8UVnvIPejmsXAs6PzeQyTNnUIR-C5lTcCPcoWOFZAVthcAXx68VVNr4YLgAikjislj7bA0IDw4bRBA5iseu87_G9XQ9xz4l3U-6RdZuMFWQGPvODXHFPGLs-AokmbBmid9YNp-s2JTpptQUXse2OOz4JDG-YvaPzr5eg4mLsxWv1WUCfIt6kJkZkyH81_8xSpbWIVw0zhpM4"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white font-headline mb-2">May mặc đồng phục</h3>
                  <p className="text-surface-variant font-body mb-4">Cung cấp giải pháp đồng phục chuyên nghiệp cho doanh nghiệp, trường học và tổ chức.</p>
                  <a className="text-secondary-fixed font-label text-xs uppercase font-bold tracking-widest hover:text-white transition-colors" href="/services">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Process Overview  */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <p className="font-label text-secondary-fixed font-bold uppercase tracking-[0.3em] text-xs mb-4 text-center">Quy Trình</p>
              <h2 className="text-4xl font-black font-headline tracking-tight text-center">Hợp tác cùng Lan Chuẩn</h2>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
              {/*  Line (Hidden on mobile)  */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-secondary/30 z-0"></div>
              {/*  Step 1  */}
              <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="w-24 h-24 bg-primary-container border-4 border-primary mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 text-3xl font-black font-headline text-secondary-fixed shadow-xl">01</div>
                <h4 className="text-xl font-bold font-headline mb-3">Tiếp nhận yêu cầu</h4>
                <p className="text-on-primary-container font-body text-sm leading-relaxed">Chúng tôi lắng nghe ý tưởng và thu thập thông số kỹ thuật chi tiết từ bạn.</p>
              </div>
              {/*  Step 2  */}
              <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="w-24 h-24 bg-primary-container border-4 border-primary mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 text-3xl font-black font-headline text-secondary-fixed shadow-xl">02</div>
                <h4 className="text-xl font-bold font-headline mb-3">Tư vấn &amp; Báo giá</h4>
                <p className="text-on-primary-container font-body text-sm leading-relaxed">Phân tích vật liệu, kỹ thuật may và gửi báo giá cạnh tranh nhất.</p>
              </div>
              {/*  Step 3  */}
              <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="w-24 h-24 bg-primary-container border-4 border-primary mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 text-3xl font-black font-headline text-secondary-fixed shadow-xl">03</div>
                <h4 className="text-xl font-bold font-headline mb-3">May mẫu &amp; Duyệt</h4>
                <p className="text-on-primary-container font-body text-sm leading-relaxed">Hoàn thiện mẫu thực tế để khách hàng kiểm tra đường may và form dáng.</p>
              </div>
              {/*  Step 4  */}
              <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="w-24 h-24 bg-primary-container border-4 border-primary mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 text-3xl font-black font-headline text-secondary-fixed shadow-xl">04</div>
                <h4 className="text-xl font-bold font-headline mb-3">Sản xuất &amp; Giao hàng</h4>
                <p className="text-on-primary-container font-body text-sm leading-relaxed">Sản xuất hàng loạt và bàn giao tận nơi theo đúng tiến độ cam kết.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  CTA Section  */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <div className="bg-white p-12 md:p-20 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-full -mr-32 -mt-32 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-primary font-headline mb-6 tracking-tight">Sẵn sàng để bắt đầu dự án của bạn?</h2>
                <p className="text-lg text-on-surface-variant font-body mb-10 max-w-2xl mx-auto">
                  Đừng ngần ngại liên hệ với chúng tôi để nhận tư vấn chuyên sâu và báo giá chi tiết nhất cho đơn hàng của bạn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://zalo.me/+84965628195" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-md font-headline font-bold text-lg hover:bg-primary-container transition-all shadow-lg text-center">
                    Yêu cầu báo giá ngay
                  </a>
                  <a href="https://zalo.me/+84965628195" target="_blank" rel="noopener noreferrer" className="border-2 border-outline-variant text-primary px-10 py-5 rounded-md font-headline font-bold text-lg hover:bg-surface-container-low transition-all text-center">
                    Liên hệ Zalo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
