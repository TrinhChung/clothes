import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar Section */}
      <nav className="row-start-1 w-full flex justify-between items-center bg-[var(--background)] shadow-md p-4 fixed top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            width={40}
            height={40}
            alt="Lan Chuẩn Logo"
            className="h-10"
          />
          <span className="text-xl font-bold text-[var(--main-yellow)] uppercase">
            Lan Chuẩn
          </span>
        </div>

        {/* Navbar Links */}
        <ul className="flex gap-8 text-[var(--main-green)] font-medium pr-[30px]">
          <li>
            <a href="#home" className="hover:text-[var(--main-yellow)]">
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
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="row-start-2 flex flex-col items-center text-center gap-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-[var(--main-yellow)]">
          Xưởng may LAN CHUẨN
        </h1>
        <p className="text-lg sm:text-xl text-[var(--main-green)]">
          Chất lượng vượt trội - Dịch vụ chuyên nghiệp - Giá thành hợp lý
        </p>
        <button className="mt-4 px-6 py-2 bg-[var(--main-yellow)] text-[var(--main-jean)] rounded-lg hover:bg-[var(--main-yellow)]">
          Liên Hệ Ngay
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-16 row-start-3 w-full max-w-5xl">
        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center text-center gap-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--main-yellow)]">
            Giới thiệu về xưởng
          </h2>
          <p className="text-[var(--foreground)] max-w-2xl">
            Chúng tôi là xưởng may chuyên sản xuất quần áo thời trang với hơn 10
            năm kinh nghiệm. Đội ngũ nhân viên tay nghề cao, máy móc hiện đại và
            quy trình sản xuất khép kín đảm bảo mang đến những sản phẩm tốt nhất
            cho khách hàng.
          </p>
        </section>

        {/* Product Categories */}
        <section id="products" className="flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--main-yellow)]">
            Danh mục sản phẩm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-[var(--main-yellow)] rounded-lg text-center">
              <h3 className="font-bold text-lg text-[var(--main-yellow)]">
                Áo sơ mi
              </h3>
              <p className="text-[var(--foreground)]">
                Thiết kế đa dạng, chất liệu cao cấp.
              </p>
            </div>
            <div className="p-6 border border-[var(--main-yellow)] rounded-lg text-center">
              <h3 className="font-bold text-lg text-[var(--main-yellow)]">
                Quần tây
              </h3>
              <p className="text-[var(--foreground)]">
                May đo chuẩn xác, đường nét tinh tế.
              </p>
            </div>
            <div className="p-6 border border-[var(--main-yellow)] rounded-lg text-center">
              <h3 className="font-bold text-lg text-[var(--main-yellow)]">
                Đồng phục công sở
              </h3>
              <p className="text-[var(--foreground)]">
                Đồng phục bền đẹp, giá cả hợp lý.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
