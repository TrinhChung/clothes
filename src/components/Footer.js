export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-300 dark:bg-black dark:text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3 font-headline text-2xl font-bold text-white">
            <img src="/Images/logo.webp" alt="Fabricon Logo" className="h-8" />
            Fabricon
          </div>
          <p className="mb-6 font-body text-base leading-relaxed text-slate-400">
            Xưởng may gia công chuyên nghiệp, cam kết uy tín và chất lượng trên từng
            sản phẩm.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition-opacity hover:opacity-80"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition-opacity hover:opacity-80"
              href="https://zalo.me/+84965628195"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-8 font-label text-sm font-bold uppercase tracking-widest text-white">
            Điều hướng
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/about"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/services"
              >
                Dịch vụ
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/products"
              >
                Sản phẩm
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/careers"
              >
                Tuyển dụng
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/blog"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-8 font-label text-sm font-bold uppercase tracking-widest text-white">
            Hỗ trợ
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/about"
              >
                Quy trình hợp tác
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/contact"
              >
                Liên hệ
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="/careers"
              >
                Gửi hồ sơ ứng tuyển
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="#"
              >
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a
                className="font-body text-base text-slate-400 transition-colors hover:text-white"
                href="#"
              >
                Điều khoản dịch vụ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-8 font-label text-sm font-bold uppercase tracking-widest text-white">
            Liên hệ
          </h4>
          <ul className="space-y-6 font-body text-base text-slate-400">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-base text-secondary">
                location_on
              </span>
              <span>Tuyên Bá, Quảng Phú, Lâm Thao, Bắc Ninh 223500, Việt Nam</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-base text-secondary">
                call
              </span>
              <a
                href="tel:+84965628195"
                className="transition-colors hover:text-white"
              >
                +84 965 628 195
              </a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-base text-secondary">
                mail
              </span>
              <a
                href="mailto:chungtrinh2k2@gmail.com"
                className="transition-colors hover:text-white"
              >
                chungtrinh2k2@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-base text-secondary">
                chat
              </span>
              <a
                href="https://zalo.me/+84965628195"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Zalo: +84 965 628 195
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
        <p className="font-label text-sm uppercase tracking-widest text-slate-500">
          © 2024 Fabricon. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="font-label text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-white"
            href="#"
          >
            Chính sách bảo mật
          </a>
          <a
            className="font-label text-sm uppercase tracking-widest text-slate-400 transition-colors hover:text-white"
            href="#"
          >
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
}
