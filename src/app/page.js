"use client";

import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Banner/>
      {/* Hero Section */}

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
    </>
  );
}
