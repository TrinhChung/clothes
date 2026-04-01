import StructuredData from "@/components/StructuredData";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createPageMetadata,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Giới thiệu xưởng may Lan Chuẩn",
  description:
    "Tìm hiểu về kinh nghiệm, quy trình vận hành, năng lực sản xuất và định hướng chất lượng của xưởng may Lan Chuẩn.",
  path: "/about",
  keywords: [
    "giới thiệu xưởng may",
    "năng lực xưởng may",
    "quy trình may mặc",
  ],
});

const coreValues = [
  {
    icon: "verified",
    title: "Chất lượng là chuẩn mực",
    description:
      "Mỗi sản phẩm được kiểm soát từ chọn vải, ra rập, may mẫu đến hoàn thiện cuối cùng để giữ độ ổn định qua từng đơn hàng.",
  },
  {
    icon: "schedule",
    title: "Đúng tiến độ đã cam kết",
    description:
      "Quy trình sản xuất được chia nhịp rõ ràng theo từng mốc để khách hàng chủ động kế hoạch ra mắt và phân phối.",
  },
  {
    icon: "visibility",
    title: "Minh bạch trong phối hợp",
    description:
      "Từ chi phí, vật liệu, mẫu duyệt đến sản lượng thực tế, mọi hạng mục đều được trao đổi rõ trước khi triển khai.",
  },
  {
    icon: "handshake",
    title: "Đồng hành cùng thương hiệu",
    description:
      "Lan Chuẩn không chỉ gia công. Chúng tôi cùng khách hàng tối ưu form dáng, chất liệu và cách hoàn thiện để sản phẩm có chỗ đứng dài hạn.",
  },
];

const metrics = [
  { value: "50.000+", label: "Sản phẩm mỗi tháng" },
  { value: "150+", label: "Thợ may lành nghề" },
  { value: "20+", label: "Năm kinh nghiệm tích lũy" },
  { value: "3 lớp", label: "Kiểm soát chất lượng" },
];

const capabilities = [
  "Hệ thống máy may công nghiệp Brother và Juki cho đường may ổn định, chính xác.",
  "Đội ngũ kỹ thuật xử lý tốt nhiều dòng chất liệu từ cotton, kaki, denim đến vải có yêu cầu hoàn thiện cao.",
  "Quy trình QC nhiều lớp giúp kiểm soát form, thông số, đường chỉ và thành phẩm trước khi đóng gói.",
];

const processSteps = [
  {
    step: "01",
    title: "Tiếp nhận brief",
    description:
      "Chúng tôi đọc kỹ yêu cầu về kiểu dáng, chất liệu, số lượng, tệp khách hàng và mục tiêu thương mại của sản phẩm.",
  },
  {
    step: "02",
    title: "Làm mẫu và hiệu chỉnh",
    description:
      "Đội ngũ kỹ thuật dựng mẫu, kiểm tra form và hoàn thiện các chi tiết quan trọng trước khi khóa thông số sản xuất.",
  },
  {
    step: "03",
    title: "Triển khai sản xuất",
    description:
      "Các công đoạn cắt, may, hoàn thiện và đóng gói được tổ chức theo từng chặng để giữ nhịp tiến độ ổn định.",
  },
  {
    step: "04",
    title: "Kiểm định thành phẩm",
    description:
      "Thành phẩm được rà soát theo checklist về đường may, độ cân form, chi tiết hoàn thiện và tiêu chuẩn đóng gói.",
  },
  {
    step: "05",
    title: "Bàn giao đúng hẹn",
    description:
      "Đơn hàng được giao theo mốc thống nhất, sẵn sàng cho khâu phân phối hoặc ra mắt bộ sưu tập tiếp theo.",
  },
];

const differences = [
  {
    title: "Kiểm soát chi tiết",
    description:
      "Chúng tôi theo sát từng điểm nhỏ như độ đều mũi chỉ, độ cân hai bên thân áo, cách xử lý mép trong và sự ổn định của form mặc.",
  },
  {
    title: "Xử lý chất liệu kỹ lưỡng",
    description:
      "Mỗi dòng vải được tiếp cận bằng kỹ thuật phù hợp để hạn chế sai số trong quá trình cắt, may và hoàn thiện.",
  },
  {
    title: "Hoàn thiện thành phẩm có chiều sâu",
    description:
      "Một sản phẩm đẹp không dừng ở việc may đúng. Nó cần sạch, gọn, đồng đều và tạo cảm giác chỉn chu ngay khi khách hàng chạm vào.",
  },
];

export default function AboutPage() {
  const aboutSchemas = [
    buildWebPageSchema({
      title: "Giới thiệu xưởng may Lan Chuẩn",
      description:
        "Trang giới thiệu kinh nghiệm, giá trị cốt lõi, năng lực sản xuất và quy trình làm việc của Lan Chuẩn.",
      path: "/about",
      type: "AboutPage",
    }),
    buildBreadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Giới thiệu", path: "/about" },
    ]),
  ];

  return (
    <main className="w-full bg-background text-on-surface">
      <StructuredData data={aboutSchemas} />
      <section className="overflow-hidden bg-surface pb-24 pt-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="mb-5 block font-label text-xs font-bold uppercase tracking-[0.35em] text-secondary">
                Giới thiệu Lan Chuẩn
              </span>
              <h1 className="max-w-4xl font-headline text-5xl font-black leading-none tracking-[-0.04em] text-primary md:text-7xl xl:text-8xl">
                Chuẩn xác trong từng đường kim, bền vững trong từng lần hợp tác.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                Lan Chuẩn được xây dựng như một đối tác gia công may mặc đáng tin
                cậy cho các thương hiệu cần sự ổn định, minh bạch và chất lượng
                hoàn thiện ở tiêu chuẩn cao.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative min-h-[520px] overflow-hidden bg-primary lg:col-span-8">
              <img
                alt="Không gian làm việc tại xưởng may Lan Chuẩn"
                className="h-full w-full object-cover opacity-80"
                src="/Images/google/about-workshop.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-primary-container/20" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-12">
                <p className="font-headline text-3xl font-bold leading-tight text-white md:text-4xl">
                  Từ nền tảng thủ công của xưởng gia đình, chúng tôi phát triển
                  năng lực sản xuất bằng tư duy kỹ thuật và kỷ luật vận hành.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:col-span-4">
              <div className="bg-surface-container-low p-8 md:p-10">
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                  Tinh thần làm nghề
                </span>
                <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                  Chúng tôi tin rằng một thương hiệu chỉ có thể đi xa khi sản phẩm
                  tạo được niềm tin ổn định qua từng lô hàng.
                </p>
              </div>
              <div className="bg-surface-container-high p-8 md:p-10">
                <p className="font-headline text-5xl font-black leading-none text-primary">
                  20+
                </p>
                <p className="mt-3 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                  Năm tích lũy tay nghề và quan hệ sản xuất
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Câu chuyện Lan Chuẩn
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Từ xưởng may gia đình đến đối tác sản xuất đáng tin cậy.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-8">
              <p className="max-w-3xl font-body text-xl leading-relaxed text-on-surface-variant">
                Lan Chuẩn khởi đầu từ mô hình xưởng may gia đình, nơi tay nghề và
                sự cẩn trọng được truyền qua từng thế hệ. Qua thời gian, chúng tôi
                mở rộng quy mô, chuẩn hóa quy trình và đầu tư máy móc để phục vụ
                các thương hiệu cần một đơn vị gia công có thể làm việc lâu dài.
              </p>
              <p className="max-w-3xl font-body text-xl leading-relaxed text-on-surface-variant">
                Điều chúng tôi theo đuổi không phải chỉ là năng lực may mặc. Đó là
                khả năng biến yêu cầu kỹ thuật thành thành phẩm đúng chuẩn, đúng
                thời điểm và đúng tinh thần mà thương hiệu mong muốn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Giá trị cốt lõi
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Nền tảng để mỗi đơn hàng vận hành chắc chắn.
              </h2>
            </div>
            <p className="max-w-xl font-body text-lg leading-relaxed text-on-surface-variant">
              Bốn nguyên tắc này định hình cách Lan Chuẩn phối hợp với thương hiệu
              từ giai đoạn đầu tiên đến khi sản phẩm sẵn sàng ra thị trường.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(8,27,56,0.05)] md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined">{value.icon}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">
                  {value.title}
                </h3>
                <p className="mt-4 font-body text-lg leading-relaxed text-on-surface-variant">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary-fixed">
                Năng lực sản xuất
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight md:text-5xl">
                Quy mô đủ lớn để vận hành ổn định, đủ kỹ để giữ chất lượng hoàn thiện.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-primary-container/20 p-8 md:p-10">
                    <p className="font-headline text-4xl font-black text-white md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="mt-3 font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary-fixed">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-5 bg-primary-container/10 p-8 md:p-10">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-secondary-fixed">
                      check
                    </span>
                    <p className="font-body text-lg leading-relaxed text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Quy trình hợp tác
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Rõ từng bước để thương hiệu dễ theo dõi và dễ ra quyết định.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-3xl font-body text-xl leading-relaxed text-on-surface-variant">
                Chúng tôi xây quy trình làm việc theo hướng trực diện, ít nhiễu và
                tập trung vào những điểm quyết định chất lượng thành phẩm cũng như
                tốc độ đưa hàng vào kế hoạch bán.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {processSteps.map((item, index) => (
              <article
                key={item.step}
                className="grid grid-cols-1 gap-6 bg-surface px-8 py-10 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-2">
                  <p className="font-headline text-4xl font-black text-primary">
                    {item.step}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
                {index < processSteps.length - 1 ? (
                  <div className="hidden md:col-span-12 md:block">
                    <div className="mt-2 h-px bg-primary/10" />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Dấu ấn khác biệt
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                Sự khác biệt nằm ở cách chúng tôi giữ chuẩn trong những phần ít người nhìn thấy.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-3xl font-body text-xl leading-relaxed text-on-surface-variant">
                Với Lan Chuẩn, chất lượng không đến từ một chi tiết riêng lẻ mà
                từ khả năng kiểm soát đồng đều toàn bộ quá trình làm ra sản phẩm.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {differences.map((item) => (
              <article
                key={item.title}
                className="bg-surface-container-low p-8 md:p-10"
              >
                <h3 className="font-headline text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-5 font-body text-lg leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-high py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="overflow-hidden bg-surface-container-lowest p-10 shadow-[0_30px_60px_rgba(8,27,56,0.08)] md:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                  Bắt đầu hợp tác
                </span>
                <h2 className="font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">
                  Nếu bạn cần một đối tác may mặc làm việc có chuẩn, hãy bắt đầu từ nhu cầu sản phẩm của mình.
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                  Xem trước các nhóm dịch vụ và danh mục để xác định hướng triển khai phù hợp với thương hiệu của bạn.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="bg-primary px-8 py-4 text-center font-headline text-lg font-bold text-white transition-colors hover:bg-primary-container"
                href="/services"
              >
                Xem dịch vụ
              </a>
              <a
                className="bg-surface-container-low px-8 py-4 text-center font-headline text-lg font-bold text-primary transition-colors hover:bg-surface-container"
                href="/products"
              >
                Xem danh mục sản phẩm
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
