import StructuredData from "@/components/StructuredData";
import RecruitmentApplicationForm from "@/components/RecruitmentApplicationForm";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import {
  recruitmentBenefits,
  recruitmentOpenings,
  recruitmentSteps,
} from "@/lib/recruitment";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Tuyển dụng xưởng may Lan Chuẩn",
  description:
    "Trang tuyển dụng của xưởng may Lan Chuẩn với các vị trí đang mở, quyền lợi làm việc, quy trình ứng tuyển và thông tin liên hệ trực tiếp.",
  path: "/careers",
  keywords: [
    "tuyển dụng xưởng may",
    "việc làm may mặc",
    "tuyển thợ may",
    "tuyển QC may mặc",
    "Lan Chuẩn tuyển dụng",
  ],
});

const heroHighlights = [
  "4 vị trí đang mở",
  "Thu nhập đến 20 triệu/tháng",
  "Môi trường ổn định, có đào tạo",
];

const applicationChecklist = [
  "Chuẩn bị thông tin kinh nghiệm làm việc hoặc các công đoạn bạn làm tốt nhất.",
  "Nếu có CV hoặc ảnh sản phẩm từng thực hiện, bạn có thể gửi kèm qua email.",
  "Lan Chuẩn ưu tiên ứng viên có tinh thần phối hợp và giữ chuẩn chất lượng ổn định.",
];

function buildJobPostingSchema(job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} Số lượng: ${job.headcount}. Hình thức: ${job.employmentType}.`,
    employmentType: "FULL_TIME",
    datePosted: "2026-04-01",
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.businessName,
      sameAs: siteConfig.url,
      logo: absoluteUrl(siteConfig.logo),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "VN",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "VND",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: "MONTH",
      },
    },
    url: absoluteUrl("/careers"),
    industry: "May mặc",
    inLanguage: "vi-VN",
  };
}

export default function CareersPage() {
  const careerSchemas = [
    buildWebPageSchema({
      title: "Tuyển dụng xưởng may Lan Chuẩn",
      description:
        "Trang tuyển dụng giới thiệu môi trường làm việc, vị trí đang mở và cách ứng tuyển tại Lan Chuẩn.",
      path: "/careers",
      type: "CollectionPage",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Tuyển dụng", path: "/careers" },
    ]),
    buildItemListSchema(
      "Vị trí tuyển dụng tại Lan Chuẩn",
      recruitmentOpenings.map((job) => ({
        name: job.title,
        path: "/careers",
        description: job.summary,
      })),
      "JobPosting"
    ),
    ...recruitmentOpenings.map(buildJobPostingSchema),
  ];

  return (
    <main className="w-full bg-background text-on-surface">
      <StructuredData data={careerSchemas} />

      <section className="relative overflow-hidden bg-primary pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <img
            alt="Không gian xưởng may Lan Chuẩn với dây chuyền sản xuất hiện đại"
            className="h-full w-full object-cover opacity-25"
            src="/Images/google/service-hero-factory.webp"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,22,50,0.96),rgba(26,43,72,0.9),rgba(3,22,50,0.72))]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="mb-6 inline-flex bg-secondary-container px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.35em] text-on-secondary-container">
                Cơ hội nghề nghiệp
              </span>
              <h1 className="max-w-5xl font-headline text-5xl font-black leading-none tracking-[-0.04em] md:text-7xl xl:text-[5.5rem]">
                Gia nhập Lan Chuẩn để cùng làm ra những sản phẩm may mặc có chuẩn.
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-white/80 md:text-2xl">
                Môi trường làm việc ổn định, quy trình rõ ràng, cơ hội nâng tay nghề
                và mức thu nhập cạnh tranh cho cả khối sản xuất lẫn khối văn phòng.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  className="bg-secondary px-8 py-4 text-center font-headline text-lg font-bold text-white transition-colors hover:bg-secondary/90"
                  href="#openings"
                >
                  Xem vị trí tuyển dụng
                </a>
                <a
                  className="bg-white/10 px-8 py-4 text-center font-headline text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  href="#apply"
                >
                  Ứng tuyển ngay
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 px-4 py-3 font-label text-xs font-bold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:col-span-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden bg-white/10 p-4 backdrop-blur-md">
                  <img
                    alt="Thợ may đang hoàn thiện sản phẩm tại xưởng Lan Chuẩn"
                    className="h-56 w-full object-cover"
                    src="/Images/google/about-workshop.webp"
                  />
                </div>
                <div className="overflow-hidden bg-white/10 p-4 backdrop-blur-md lg:translate-y-10">
                  <img
                    alt="Cận cảnh đường may và chất lượng hoàn thiện sản phẩm"
                    className="h-56 w-full object-cover"
                    src="/Images/google/service-quality-closeup.webp"
                  />
                </div>
              </div>

              <div className="bg-white/10 p-8 backdrop-blur-md">
                <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary-fixed">
                  Lan Chuẩn tuyển dụng
                </p>
                <p className="mt-4 font-body text-lg leading-relaxed text-white/80">
                  Chúng tôi tìm người làm nghề nghiêm túc, muốn phát triển lâu dài
                  và coi chất lượng sản phẩm là tiêu chuẩn không thể bỏ qua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Vì sao chọn Lan Chuẩn
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Môi trường làm việc được xây để giữ người có tay nghề và tinh thần làm nghề.
              </h2>
              <p className="mt-6 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                Lan Chuẩn không tuyển người để lấp chỗ trống. Chúng tôi tuyển người
                có thể đồng hành và phát triển cùng một hệ vận hành nghiêm túc, rõ
                ràng và tôn trọng chất lượng.
              </p>

              <div className="mt-10 space-y-8">
                {recruitmentBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-surface-container-lowest text-secondary shadow-[0_12px_24px_rgba(8,27,56,0.06)]">
                      <span className="material-symbols-outlined">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-primary">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 font-body text-lg leading-relaxed text-on-surface-variant">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden bg-surface-container-lowest p-4 shadow-[0_24px_48px_rgba(8,27,56,0.05)]">
                  <img
                    alt="Không gian làm việc được tổ chức gọn gàng tại Lan Chuẩn"
                    className="h-72 w-full object-cover"
                    src="/Images/google/products-tailor-workspace.webp"
                  />
                </div>
                <div className="overflow-hidden bg-surface-container-lowest p-4 shadow-[0_24px_48px_rgba(8,27,56,0.05)] md:translate-y-12">
                  <img
                    alt="Chi tiết vật liệu và kỹ thuật hoàn thiện trong xưởng may"
                    className="h-72 w-full object-cover"
                    src="/Images/google/service-pattern-making.webp"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[1.15fr,0.85fr]">
                <div className="bg-primary p-8 text-white md:p-10">
                  <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary-fixed">
                    Nhịp làm việc
                  </p>
                  <p className="mt-4 font-headline text-3xl font-black leading-tight md:text-4xl">
                    Kỷ luật trong vận hành, tôn trọng trong phối hợp, rõ ràng trong thưởng phạt.
                  </p>
                </div>
                <div className="bg-surface-container-high p-8 md:p-10">
                  <p className="font-headline text-5xl font-black leading-none text-primary">
                    24h
                  </p>
                  <p className="mt-3 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                    Mục tiêu phản hồi hồ sơ trong vòng một ngày làm việc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24" id="openings">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Vị trí đang tuyển
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Chọn vị trí phù hợp với tay nghề, kinh nghiệm và nhịp làm việc của bạn.
              </h2>
              <p className="mt-5 font-body text-xl leading-relaxed text-on-surface-variant">
                Từ khối sản xuất đến khối vận hành, mỗi vị trí đều gắn trực tiếp với
                chất lượng thành phẩm và khả năng giữ tiến độ đơn hàng.
              </p>
            </div>
            <span className="bg-secondary-container px-4 py-3 font-label text-xs font-bold uppercase tracking-[0.3em] text-on-secondary-container">
              {recruitmentOpenings.length} vị trí đang mở
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
            {recruitmentOpenings.map((job) => {
              const layoutClass = job.highlighted
                ? "md:col-span-2"
                : job.slug === "quan-ly-chat-luong"
                  ? "md:col-span-4"
                  : "md:col-span-3";
              const cardClass = job.highlighted
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-surface-container-lowest text-on-surface shadow-[0_20px_40px_rgba(8,27,56,0.05)]";
              const badgeClass = job.highlighted
                ? "bg-white text-secondary"
                : "bg-primary-container text-on-primary";

              return (
                <article
                  key={job.slug}
                  className={`${layoutClass} ${cardClass} flex flex-col justify-between p-8`}
                >
                  <div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span
                        className={`${badgeClass} px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest`}
                      >
                        {job.department}
                      </span>
                      <span className="font-headline text-xl font-bold">
                        {job.salaryText}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl font-bold">
                      {job.title}
                    </h3>
                    <p className="mt-4 font-body text-lg leading-relaxed opacity-80">
                      {job.summary}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-outline-variant/20 pt-6">
                    <div className="flex flex-wrap gap-3 font-label text-xs font-bold uppercase tracking-[0.22em] opacity-75">
                      <span>{job.employmentType}</span>
                      <span>{job.headcount}</span>
                      <span>{job.experience}</span>
                    </div>
                    <a
                      className="mt-5 inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.2em] text-primary transition-transform hover:translate-x-1"
                      href="#apply"
                    >
                      Ứng tuyển
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-high py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              Quy trình ứng tuyển
            </span>
            <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
              Bốn bước rõ ràng để bạn biết mình đang ở đâu trong quá trình tuyển dụng.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="absolute left-0 top-12 hidden h-px w-full bg-outline-variant/40 md:block" />
            {recruitmentSteps.map((step) => (
              <article
                key={step.title}
                className="relative z-10 text-center"
              >
                <div
                  className={`${step.featured ? "bg-primary text-white" : "bg-surface-container-lowest text-primary"} mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-[0_16px_32px_rgba(8,27,56,0.08)] ring-8 ring-surface-container-high`}
                >
                  <span className="material-symbols-outlined text-4xl">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mt-6 font-headline text-2xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-lg leading-relaxed text-on-surface-variant">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24" id="apply">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Liên hệ ứng tuyển
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Gửi hồ sơ theo cách thuận tiện nhất để chúng tôi phản hồi nhanh.
              </h2>
              <p className="mt-6 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                Bạn có thể ứng tuyển trực tiếp qua email, gọi điện trao đổi hoặc kết
                nối nhanh qua Zalo để xác nhận vị trí phù hợp trước khi gửi hồ sơ đầy đủ.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Điện thoại
                    </p>
                    <a
                      className="font-headline text-2xl font-bold text-primary transition-colors hover:text-secondary"
                      href={`tel:${siteConfig.phone}`}
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Email ứng tuyển
                    </p>
                    <a
                      className="font-headline text-2xl font-bold text-primary transition-colors hover:text-secondary"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="mb-1 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                      Địa điểm làm việc
                    </p>
                    <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                      {siteConfig.addressText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-surface-container-low p-8">
                <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                  Trước khi gửi hồ sơ
                </p>
                <div className="mt-6 space-y-4">
                  {applicationChecklist.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="material-symbols-outlined mt-1 text-secondary">
                        check
                      </span>
                      <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <RecruitmentApplicationForm roles={recruitmentOpenings} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
