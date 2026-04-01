import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative flex h-[870px] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHMUUY8XLGEBJ2BAKsEsKN1-Vi3h6morrjjkgTh5t9iPeOewktGzr4El06Goz35At_3Sn3pmxWyHE6pIf66HIshJAvcHqIiBMOshGLApJLQBmi_nUy0GAjtSdl9FwH7wtOcFbBnlPwrBo_wjEpb7lVU8xt9pnztvCh-EknOXOqRSgsvRLecnFkgeqgrPqS0RTa5fhB_IkD6paknMhhlUD1S291ZfGSOjaovFwWF03dIX16LrBEljf1vwQUMgIRyoUwdye0WZ6jT5A"
          alt="Cận cảnh chất liệu vải cao cấp dùng trong may mặc"
          fill
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      <div className="relative z-10 mt-20 w-full max-w-7xl mx-auto px-8">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded bg-secondary-container px-3 py-1 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-container">
            Xưởng may B2B
          </span>
          <h1 className="mb-6 font-headline text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl">
            Xưởng May Gia Công
            <br />
            <span className="text-secondary-fixed">Chuyên Nghiệp</span>
          </h1>
          <p className="mb-10 font-body text-xl leading-relaxed text-surface-variant">
            Tận tâm trong từng đường kim mũi chỉ. Chúng tôi nhận gia công may mặc,
            đồng phục và may mẫu theo yêu cầu với quy trình kiểm soát chất lượng rõ ràng.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-headline text-base font-bold text-primary transition-all hover:bg-secondary-container"
            >
              Yêu cầu báo giá
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              href="/services"
              className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-4 font-headline text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Khám phá dịch vụ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
