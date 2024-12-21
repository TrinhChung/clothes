import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="row-start-1 w-full flex justify-between items-center bg-[var(--background)] shadow-md p-4
       fixed top-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/Images/logo.png"
          width={40}
          height={40}
          alt="Logo Lan Chuẩn Clothes - Xưởng may chuyên nghiệp"
          className="h-10"
          priority
        />
        <span className="text-xl font-bold text-[var(--main-yellow)] uppercase">
          Lan Chuẩn
        </span>
      </div>

      {/* Navbar Links */}
      <ul className="flex gap-8 text-[var(--main-green)] font-medium pr-[30px] hidden sm:flex">
        <li>
          <a href="/" className="hover:text-[var(--main-yellow)]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[var(--main-yellow)]">
            Giới thiệu
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-[var(--main-yellow)]">
            Sản phẩm
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[var(--main-yellow)]">
            Liên hệ
          </a>
        </li>
      </ul>
      {/* Mobile Navbar toggle */}
      <button className="sm:hidden text-[var(--main-yellow)]">☰</button>
    </nav>
  );
}
