import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const article = {
  title: "Cách chọn xưởng may chất lượng để giữ giá tốt cho shop thời trang",
  description:
    "Hướng dẫn đánh giá xưởng may uy tín qua máy móc, QC, lead time, năng lực may mẫu và hợp đồng trước khi chốt đơn số lượng lớn.",
  path: "/blog",
  publishedAt: "2026-04-01",
  updatedAt: "2026-04-01",
  publishedLabel: "01 tháng 04, 2026",
  readingTime: "10 phút đọc",
  category: "Cẩm nang sản xuất",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjif5QvQEAXz6xVhJbaKbAa0zjCzlPxKjwPSBHs7KVlsaGlWdL031Y_TurwDCd_JyG7JIDt64NsxUWoBB_GhSJ1WcEc5nyZ5d1Pu46PWlwCp-izSO12iwFPrwGrgKpvjT8DTeHSx2pvR95XY7tcssp9aO61mrSHAAg74HBZ0vufQY4O4XkiaaagxN-g9w9aCXC8w1XMOze3tnL5TXBeUr2zLfOtFT5WEn4I8XUDMH5f4ra0IlciV3Y510OCL8YC0z_Nn4sCbgmao4",
  workshopImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCr2JXM6KM1FxECmHbvzgbUVZkUjU4r_kTWeOXk912Kdj6FT214k6-kEKiYn4ZHRIAzad8v6gXtUW4jtDLdSl6qsvjb9t3P7lQylSsiNLhQQ0hvjRWfCaqV0IkrboogivkwVdb9haeAmv5DWT6XecuGkwgW3IcIjZOz5mPI3L4A4GffdXI5WXWidXvtF1xhRW55z7kqVXsXDFxXLBX2MV4097nLDuvr-TkXvCFDgHMSdbJen1IWHPHqHXVO9nb3viQqgPD3w6x8BCo",
  productImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAwoBuYYuYUgze8epM03Dm_tZpmEzGDjDbUEQR-B5qCbo7mp46XIaDFZXsxsl95mlEkirnBlJfa4NWz38QSZ9G1bB9pKUQ3sE04CcP3il-Yrpwmmyu2pzmL8SBUHnKBZoxzGycljjeY0qit-WrNn8-zvSUKmsXpP48aIbD7QFBy0r6hBV5q1Y_-e22Rt8vO4gxuE5G8zji6K-9tE8dDnvX58fRVhgIYrHBy9cBsGv4GebPHzEFvzmocFE9_7-vrbSf7S0u9pPT4y8U",
};

const riskSignals = [
  "Chỉ báo một con số tổng mà không tách chi phí vải, phụ liệu, công may và hoàn thiện.",
  "Không có mẫu đối để duyệt trước khi chạy đơn hoặc từ chối may thử trên đúng chất liệu.",
  "Không cam kết tiến độ, tỷ lệ lỗi cho phép và phương án xử lý khi hàng lỗi hoặc giao trễ.",
  "Không cho xem xưởng thực tế, quy trình QC hoặc các đơn hàng tương tự đã sản xuất.",
];

const criteria = [
  {
    index: "01",
    title: "Máy móc và chuyền may phù hợp",
    description:
      "Xưởng cần có thiết bị đúng loại sản phẩm bạn bán như áo thun, sơ mi, đồng phục, linen hay hàng form khó.",
  },
  {
    index: "02",
    title: "Quy trình QC nhiều lớp",
    description:
      "Ưu tiên đơn vị kiểm tra bán thành phẩm theo chuyền, kiểm cuối và lưu biên bản lỗi rõ ràng.",
  },
  {
    index: "03",
    title: "Minh bạch vật liệu",
    description:
      "Phải nêu rõ loại vải, định lượng, thành phần sợi, độ co rút và nguồn cung ứng phụ liệu chính.",
  },
  {
    index: "04",
    title: "Năng lực may mẫu và chỉnh rập",
    description:
      "Một xưởng mạnh sẽ đọc được tech pack, góp ý cấu trúc sản phẩm và chỉnh rập trước khi chạy đơn lớn.",
  },
  {
    index: "05",
    title: "Điều phối đơn hàng và lead time",
    description:
      "Cần có kế hoạch chuyền, lịch giao từng mốc và người phụ trách cập nhật tiến độ xuyên suốt.",
  },
];

const directFactoryBenefits = [
  "Giảm chi phí trung gian và kiểm soát tốt hơn từng cấu phần báo giá.",
  "Trao đổi trực tiếp với kỹ thuật, rút ngắn vòng phản hồi khi cần sửa mẫu.",
  "Theo dõi tiến độ thực tế và kiểm tra chất lượng ngay tại xưởng.",
  "Chủ động đàm phán MOQ, lịch giao và phương án xử lý lỗi sau giao hàng.",
];

const auditSteps = [
  "Yêu cầu bảng báo giá chi tiết theo từng cấu phần thay vì chỉ lấy giá trọn gói.",
  "Đặt may mẫu đối trên đúng chất liệu và đúng phụ liệu dự kiến sản xuất.",
  "Kiểm tra 3 đến 5 sản phẩm ngẫu nhiên sau chuyền pilot để xem độ ổn định của đường may.",
  "Chốt hợp đồng có điều khoản về tỷ lệ lỗi, thời gian giao và trách nhiệm bảo hành đơn hàng.",
];

const checklist = [
  "Có xưởng sản xuất thực tế và cho phép đối tác tham quan hoặc quay video dây chuyền.",
  "Cung cấp mẫu đối bám sát thông số kỹ thuật trước khi chạy đơn chính thức.",
  "Có hợp đồng rõ về tiến độ, chất lượng, tỷ lệ hao hụt và mức bồi thường khi sai lỗi.",
  "Minh bạch nguồn vải, phụ liệu, tiêu chuẩn kiểm hàng và quy cách đóng gói.",
  "Có người quản lý đơn hàng cập nhật thường xuyên qua Zalo, điện thoại hoặc email.",
  "Có chính sách sửa lỗi, hoàn thiện lại hoặc hỗ trợ xử lý khi phát sinh sau giao hàng.",
];

const relatedLinks = [
  {
    label: "Gia công",
    title: "Dịch vụ may gia công cho local brand và shop thời trang",
    href: "/services/may-gia-cong",
  },
  {
    label: "May mẫu",
    title: "Quy trình may mẫu và chỉnh rập trước khi sản xuất hàng loạt",
    href: "/services/may-mau",
  },
  {
    label: "Tư vấn",
    title: "Tư vấn chọn vải và phụ liệu theo ngân sách thực tế",
    href: "/services/tu-van-vai",
  },
];

const trustPoints = [
  {
    title: "Độ chính xác cao",
    description:
      "Duyệt mẫu trước khi lên chuyền để kiểm soát form dáng, thông số và tiêu chuẩn hoàn thiện.",
    icon: "verified",
  },
  {
    title: "Tiến độ rõ ràng",
    description:
      "Theo dõi từng mốc từ nhận mẫu, may thử, pilot đến sản xuất và bàn giao.",
    icon: "schedule",
  },
  {
    title: "Làm việc trực tiếp",
    description:
      "Kết nối thẳng với xưởng giúp tối ưu chi phí và phản hồi nhanh hơn khi cần chỉnh sửa.",
    icon: "precision_manufacturing",
  },
];

const faqs = [
  {
    question: "Có nên chọn xưởng may rẻ nhất trên thị trường không?",
    answer:
      "Không nên chốt chỉ vì giá thấp. Điều quan trọng là so sánh trên cùng cấu hình vải, phụ liệu, kỹ thuật may, MOQ và điều khoản xử lý lỗi.",
  },
  {
    question: "Trước khi đặt đơn lớn cần test xưởng như thế nào?",
    answer:
      "Hãy may mẫu trên đúng chất liệu, kiểm pilot một nhóm nhỏ sản phẩm và đánh giá khả năng giao tiếp của quản lý đơn hàng trong suốt quá trình.",
  },
  {
    question: "Dấu hiệu nào cho thấy xưởng may có thể đi lâu dài cùng thương hiệu?",
    answer:
      "Xưởng có quy trình rõ, báo giá minh bạch, chủ động góp ý kỹ thuật và chịu trách nhiệm cụ thể khi phát sinh lỗi sẽ phù hợp để hợp tác lâu dài.",
  },
];

export const metadata = createPageMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  image: article.heroImage,
  type: "article",
  keywords: [
    "cách chọn xưởng may chất lượng",
    "kinh nghiệm chọn xưởng may",
    "xưởng may giá tốt",
    "xưởng may uy tín",
    "xưởng may số lượng lớn",
  ],
});

export default function BlogPage() {
  const articleSchemas = [
    buildWebPageSchema({
      title: article.title,
      description: article.description,
      path: article.path,
      type: "Article",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Blog", path: article.path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      image: [article.heroImage],
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: absoluteUrl(article.path),
      inLanguage: "vi-VN",
      articleSection: article.category,
      author: {
        "@type": "Organization",
        name: siteConfig.businessName,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.businessName,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <StructuredData data={articleSchemas} />
      <main className="bg-background pt-24">
        <header className="relative overflow-hidden bg-primary">
          <img
            src={article.heroImage}
            alt="Không gian xưởng may hiện đại với dây chuyền sản xuất gọn gàng"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,22,50,0.15),rgba(3,22,50,0.92))]" />
          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-24 md:px-8">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.24em] text-secondary-fixed backdrop-blur-md">
                {article.category}
              </span>
              <h1 className="max-w-4xl font-headline text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
                {article.title}
              </h1>
              <p className="mt-8 max-w-3xl font-body text-lg italic leading-relaxed text-surface-variant md:text-2xl">
                Tìm một xưởng may giá tốt không khó, nhưng tìm đúng đối tác giữ
                được chất lượng, tiến độ và biên lợi nhuận mới là bài toán quyết
                định sự sống còn của shop thời trang.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-fixed font-headline text-sm font-bold text-on-secondary-fixed">
                    LC
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-[0.18em] text-white/60">
                      Biên tập bởi
                    </p>
                    <p className="font-headline text-base font-bold text-white">
                      Đội ngũ Lan Chuẩn
                    </p>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.18em] text-white/60">
                    Ngày xuất bản
                  </p>
                  <time
                    dateTime={article.publishedAt}
                    className="font-body text-base text-white"
                  >
                    {article.publishedLabel}
                  </time>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.18em] text-white/60">
                    Thời gian đọc
                  </p>
                  <p className="font-body text-base text-white">{article.readingTime}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="space-y-16">
            <section className="grid gap-10 rounded-[2rem] bg-surface px-8 py-10 shadow-[0_24px_64px_rgba(8,27,56,0.06)] md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <p className="border-l-4 border-secondary pl-6 font-body text-xl italic leading-relaxed text-on-surface md:text-3xl">
                  Giá rẻ chỉ thực sự có ý nghĩa khi xưởng giữ được chất lượng ổn
                  định, đúng tiến độ và minh bạch ở từng khâu sản xuất.
                </p>
                <p className="font-body text-lg leading-8 text-on-surface-variant">
                  Trong thực tế, rất nhiều shop bị cuốn vào báo giá thấp rồi phải
                  trả giá bằng hàng lỗi, giao trễ hoặc tỷ lệ hoàn hàng cao. Khi
                  đánh giá xưởng, hãy nhìn vào năng lực vận hành tổng thể thay vì
                  chỉ nhìn vào con số cuối cùng trên bảng báo giá.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container-low p-7">
                <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                  Chẩn đoán nhanh
                </p>
                <ul className="mt-6 space-y-4">
                  {riskSignals.map((risk) => (
                    <li
                      key={risk}
                      className="flex items-start gap-3 font-body text-sm leading-6 text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-error">
                        warning
                      </span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="max-w-3xl">
                <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                  Tiêu chí vàng
                </p>
                <h2 className="mt-4 font-headline text-3xl font-black tracking-tight text-primary md:text-5xl">
                  5 điểm phải kiểm tra trước khi chốt xưởng may
                </h2>
                <p className="mt-4 font-body text-lg leading-8 text-on-surface-variant">
                  Một xưởng chất lượng cao luôn thể hiện được năng lực bằng quy
                  trình, tài liệu và khả năng phản hồi rõ ràng. Đây là 5 tiêu chí
                  cốt lõi giúp bạn lọc nhanh những đơn vị chỉ mạnh về báo giá.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {criteria.map((item) => (
                  <div
                    key={item.index}
                    className="rounded-[1.75rem] bg-surface-container-lowest p-8 shadow-[0_20px_48px_rgba(8,27,56,0.05)]"
                  >
                    <p className="font-headline text-5xl font-black tracking-[-0.06em] text-secondary/35">
                      {item.index}
                    </p>
                    <h3 className="mt-6 font-headline text-2xl font-bold tracking-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-body text-base leading-7 text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                  Làm việc trực tiếp
                </p>
                <h2 className="font-headline text-3xl font-black tracking-tight text-primary md:text-5xl">
                  Vì sao làm việc thẳng với xưởng giúp giữ biên lợi nhuận tốt hơn
                </h2>
                <p className="font-body text-lg leading-8 text-on-surface-variant">
                  Khi bỏ qua trung gian, bạn không chỉ tối ưu giá vốn mà còn kiểm
                  soát được nhiều hơn ở các khâu kỹ thuật. Đây là khác biệt rất
                  lớn nếu thương hiệu của bạn cần lên mẫu nhanh, sửa form liên tục
                  hoặc chốt đơn bulk trong thời gian gấp.
                </p>
                <ul className="space-y-4">
                  {directFactoryBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 rounded-2xl bg-surface-container-low px-5 py-4 font-body text-base leading-7 text-on-surface"
                    >
                      <span className="material-symbols-outlined text-secondary">
                        check_circle
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_64px_rgba(8,27,56,0.08)]">
                <img
                  src={article.workshopImage}
                  alt="Thợ may đang thao tác hoàn thiện sản phẩm trên máy may công nghiệp"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] bg-primary/90 p-6 text-white backdrop-blur-md">
                  <p className="font-body text-lg italic leading-8 text-white/90">
                    "Một xưởng may tốt không chỉ giao hàng. Họ giúp bạn giảm lỗi,
                    giữ phom và bảo vệ trải nghiệm của khách mua cuối cùng."
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[2.5rem] bg-primary px-8 py-10 text-white shadow-[0_24px_64px_rgba(3,22,50,0.18)]">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary-fixed">
                Checklist thực chiến
              </p>
              <h2 className="mt-4 font-headline text-3xl font-black tracking-tight md:text-5xl">
                Cách test xưởng trước khi giao đơn số lượng lớn
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {auditSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <p className="font-label text-xs uppercase tracking-[0.2em] text-white/60">
                      Bước {index + 1}
                    </p>
                    <p className="mt-3 font-body text-base leading-7 text-white">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="max-w-3xl">
                <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                  Câu hỏi thường gặp
                </p>
                <h2 className="mt-4 font-headline text-3xl font-black tracking-tight text-primary md:text-5xl">
                  Những vướng mắc phổ biến khi tìm xưởng may
                </h2>
              </div>
              <div className="space-y-5">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[1.75rem] bg-surface-container-low px-6 py-6"
                  >
                    <h3 className="font-headline text-xl font-bold text-primary">
                      {item.question}
                    </h3>
                    <p className="mt-3 font-body text-base leading-7 text-on-surface-variant">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-surface-container-high p-8 shadow-[0_20px_48px_rgba(8,27,56,0.05)]">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Về Lan Chuẩn
              </p>
              <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-primary">
                Xưởng may đồng hành từ mẫu thử đến sản xuất hàng loạt
              </h3>
              <p className="mt-4 font-body text-base leading-7 text-on-surface-variant">
                Lan Chuẩn tập trung vào gia công may mặc, may mẫu và phát triển
                đơn hàng cho các thương hiệu cần chất lượng ổn định, lead time rõ
                và báo giá minh bạch.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-on-secondary-container">
                  Làm việc trực tiếp với xưởng, không qua trung gian
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-surface-container-low p-8">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Quick audit
              </p>
              <ul className="mt-6 space-y-4">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm leading-6 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-secondary">
                      task_alt
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_64px_rgba(8,27,56,0.08)]">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Chủ đề liên quan
              </p>
              <div className="mt-6 space-y-5">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl bg-surface-container-low px-5 py-5 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                      {item.label}
                    </p>
                    <p className="mt-2 font-headline text-lg font-bold leading-7 text-primary">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-secondary px-8 py-8 text-white">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Cần báo giá?
              </p>
              <h3 className="mt-4 font-headline text-3xl font-black tracking-tight">
                Gửi mẫu và nhận tư vấn trực tiếp từ xưởng
              </h3>
              <p className="mt-4 font-body text-base leading-7 text-white/80">
                Gọi {siteConfig.phoneDisplay} hoặc nhắn Zalo để kiểm tra nhanh khả
                năng sản xuất, lead time và cấu trúc báo giá cho mẫu của bạn.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-primary px-5 py-3 text-center font-headline text-sm font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                >
                  Nhắn Zalo ngay
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl bg-white/15 px-5 py-3 text-center font-headline text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/20"
                >
                  Gửi yêu cầu báo giá
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <section className="bg-surface-container py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center">
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Cam kết vận hành
              </p>
              <h2 className="mt-4 font-headline text-3xl font-black tracking-tight text-primary md:text-5xl">
                Giữ chất lượng ổn định, giao hàng rõ tiến độ và báo giá minh bạch
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {trustPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] bg-white px-6 py-8 text-center shadow-[0_20px_48px_rgba(8,27,56,0.05)]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="mt-6 font-headline text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-base leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-10 overflow-hidden rounded-[2.75rem] bg-primary-container p-8 text-white shadow-[0_28px_72px_rgba(3,22,50,0.12)] lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-secondary-fixed">
                Bắt đầu sản xuất
              </p>
              <h2 className="mt-4 font-headline text-3xl font-black tracking-tight md:text-5xl">
                Biến ý tưởng thành sản phẩm may mặc sẵn sàng bán ra thị trường
              </h2>
              <p className="mt-6 max-w-2xl font-body text-lg italic leading-8 text-inverse-on-surface">
                Gửi mẫu, bảng thông số hoặc ý tưởng của bạn. Đội ngũ Lan Chuẩn sẽ
                tư vấn chất liệu, cách lên chuyền và cấu trúc báo giá phù hợp với
                mục tiêu kinh doanh.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-secondary px-6 py-4 text-center font-headline text-base font-bold text-on-primary-fixed transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Nhận báo giá ngay
                </Link>
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center font-headline text-base font-bold text-white transition-colors hover:bg-white/20"
                >
                  Gửi mẫu qua Zalo
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_64px_rgba(8,27,56,0.18)]">
              <img
                src={article.productImage}
                alt="Sản phẩm may mặc hoàn thiện được gấp gọn để bàn giao cho khách hàng"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
