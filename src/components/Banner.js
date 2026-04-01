"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHMUUY8XLGEBJ2BAKsEsKN1-Vi3h6morrjjkgTh5t9iPeOewktGzr4El06Goz35At_3Sn3pmxWyHE6pIf66HIshJAvcHqIiBMOshGLApJLQBmi_nUy0GAjtSdl9FwH7wtOcFbBnlPwrBo_wjEpb7lVU8xt9pnztvCh-EknOXOqRSgsvRLecnFkgeqgrPqS0RTa5fhB_IkD6paknMhhlUD1S291ZfGSOjaovFwWF03dIX16LrBEljf1vwQUMgIRyoUwdye0WZ6jT5A"
          alt="Close-up of high-quality navy blue silk fabric texture"
          fill
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full mt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-6 bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-[0.2em] rounded">
            Established Quality
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white font-headline leading-tight tracking-tighter mb-6">
            Xưởng May Gia Công <br />
            <span className="text-secondary-fixed">Chuyên Nghiệp</span>
          </h1>
          <p className="text-xl text-surface-variant font-body mb-10 leading-relaxed">
            Tận tâm trong từng đường kim mũi chỉ. Chúng tôi cam kết mang lại giá trị bền vững và chất lượng vượt trội cho mọi dự án may mặc của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-md font-headline font-bold text-base hover:bg-secondary-container transition-all flex items-center justify-center gap-2">
              Yêu cầu báo giá
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-md font-headline font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Khám phá dịch vụ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
