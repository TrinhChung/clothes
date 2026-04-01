export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black w-full py-12 px-6 text-slate-300 dark:text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-2xl font-bold text-white mb-4 font-headline">
            <img src="/Images/logo.png" alt="Fabricon Logo" className="h-8" />
            Fabricon
          </div>
          <p className="font-body text-slate-400 text-base leading-relaxed mb-6">
            Xưởng may gia công chuyên nghiệp, cam kết uy tín và chất lượng trên
            từng sản phẩm.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:opacity-80 transition-opacity"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:opacity-80 transition-opacity"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-label text-white uppercase tracking-widest text-sm font-bold mb-8">
            Điều hướng
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="#"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="/about"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="/services"
              >
                Dịch vụ
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="/products"
              >
                Sản phẩm
              </a>
            </li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-label text-white uppercase tracking-widest text-sm font-bold mb-8">
            Hỗ trợ
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="#"
              >
                Quy trình
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="#contact"
              >
                Liên hệ
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="#"
              >
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a
                className="text-slate-400 hover:text-white transition-colors font-body text-base"
                href="#"
              >
                Điều khoản dịch vụ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label text-white uppercase tracking-widest text-sm font-bold mb-8">
            Liên hệ
          </h4>
          <ul className="space-y-6 text-base text-slate-400 font-body">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-base">
                location_on
              </span>
              <span>Tuyên Bá, Quảng Phú, Lâm Thao, Bắc Ninh 223500, Việt Nam</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-base">
                call
              </span>
              <a href="tel:+84965628195" className="hover:text-white transition-colors">+84 965 628 195</a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-base">
                mail
              </span>
              <a href="mailto:chungtrinh2k2@gmail.com" className="hover:text-white transition-colors">chungtrinh2k2@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-base">
                chat
              </span>
              <a href="https://zalo.me/+84965628195" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Zalo: +84 965 628 195</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500 font-label tracking-widest uppercase">
          © 2024 Fabricon. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-sm text-slate-400 hover:text-white transition-colors font-label tracking-widest uppercase"
            href="#"
          >
            Chính sách bảo mật
          </a>
          <a
            className="text-sm text-slate-400 hover:text-white transition-colors font-label tracking-widest uppercase"
            href="#"
          >
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
}
