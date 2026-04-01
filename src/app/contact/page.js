import StructuredData from "@/components/StructuredData";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Liên hệ báo giá may mặc",
  description:
    "Liên hệ xưởng may Lan Chuẩn để nhận tư vấn chất liệu, báo giá gia công may mặc và trao đổi nhu cầu sản xuất.",
  path: "/contact",
  keywords: [
    "liên hệ xưởng may",
    "báo giá may mặc",
    "tư vấn gia công may mặc",
  ],
});

export default function ContactPage() {
  const contactSchemas = [
    buildWebPageSchema({
      title: "Liên hệ báo giá may mặc",
      description:
        "Trang liên hệ và yêu cầu báo giá của xưởng may Lan Chuẩn với thông tin điện thoại, email, địa chỉ và bản đồ.",
      path: "/contact",
      type: "ContactPage",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Liên hệ", path: "/contact" },
    ]),
  ];

  return (
    <main className="w-full bg-background text-on-surface">
      <StructuredData data={contactSchemas} />
      <section className="bg-surface pb-20 pt-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="mb-5 block font-label text-xs font-bold uppercase tracking-[0.35em] text-secondary">
                Liên hệ Lan Chuẩn
              </span>
              <h1 className="font-headline text-5xl font-black leading-none tracking-[-0.04em] text-primary md:text-7xl">
                Kết nối trực tiếp để trao đổi nhu cầu sản xuất của bạn.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                Nếu bạn đang tìm đối tác gia công may mặc ổn định về chất lượng,
                tiến độ và cách phối hợp, hãy gửi yêu cầu để chúng tôi tư vấn
                hướng triển khai phù hợp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-high py-24" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Chọn kênh liên hệ phù hợp với cách bạn làm việc.
              </h2>

              <div className="mt-12 space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Địa chỉ xưởng
                    </p>
                    <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                      Tuyên Bá, Quảng Phú, Lâm Thao, Bắc Ninh 223500, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Điện thoại
                    </p>
                    <a
                      href="tel:+84965628195"
                      className="font-headline text-2xl font-bold text-primary transition-colors hover:text-secondary"
                    >
                      +84 965 628 195
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Email
                    </p>
                    <a
                      href="mailto:chungtrinh2k2@gmail.com"
                      className="font-headline text-2xl font-bold text-primary transition-colors hover:text-secondary"
                    >
                      chungtrinh2k2@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  className="bg-primary px-8 py-4 font-headline text-lg font-bold text-white transition-colors hover:bg-primary-container"
                  href="https://zalo.me/+84965628195"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zalo Chat
                </a>
                <a
                  className="bg-surface-container-lowest px-8 py-4 font-headline text-lg font-bold text-primary transition-colors hover:bg-surface-container-low"
                  href="mailto:chungtrinh2k2@gmail.com"
                >
                  Gửi email
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 shadow-[0_24px_48px_rgba(8,27,56,0.08)] lg:col-span-7 md:p-14">
              <h3 className="font-headline text-3xl font-bold text-primary">
                Gửi yêu cầu cho chúng tôi
              </h3>
              <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
                Hãy chia sẻ ngắn gọn về dòng sản phẩm, số lượng dự kiến hoặc yêu
                cầu kỹ thuật. Chúng tôi sẽ phản hồi để trao đổi chi tiết hơn.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                      Họ tên
                    </label>
                    <input
                      className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
                      placeholder="Nguyễn Văn A"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                      Số điện thoại
                    </label>
                    <input
                      className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
                      placeholder="090..."
                      type="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
                    placeholder="example@mail.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    Nội dung yêu cầu
                  </label>
                  <textarea
                    className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
                    placeholder="Mô tả nhu cầu sản xuất, dòng sản phẩm hoặc thời gian dự kiến..."
                    rows="5"
                  />
                </div>

                <button
                  className="bg-primary px-8 py-4 font-headline text-lg font-bold text-white transition-colors hover:bg-primary-container"
                  type="submit"
                >
                  Gửi yêu cầu báo giá
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full grayscale contrast-125 opacity-90 transition-all duration-1000 hover:grayscale-0 hover:opacity-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5077022790488!2d106.1594581!3d21.0123622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359fa84bf078d1%3A0x495360d92cf675ee!2zWMaw4bufbmcgTWF5IExhbiBDaHXhuqlu!5e0!3m2!1svi!2sjp!4v1775038694571!5m2!1svi!2sjp"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ Xưởng May Lan Chuẩn"
        />
      </section>
    </main>
  );
}
