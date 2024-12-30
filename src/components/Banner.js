export default function Banner() {
  return (
    <div className="relative w-full">
      {/* Banner image (centered with original size) */}
      <div className="w-full flex flex-col justify-center items-center">
        <img
          src="/Images/banner.png"
          alt="Lan Chuẩn Clothes Banner"
          className="object-contain h-auto lg:h-[60vh] z-20"
        />
        <header
          id="home"
          className="row-start-2 flex flex-col items-center text-center gap-4 z-20 px-4 sm:px-8"
        >
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-[var(--main-yellow)]">
            Xưởng may LAN CHUẨN
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[var(--main-green)]">
            Chất lượng vượt trội - Dịch vụ chuyên nghiệp - Giá thành hợp lý
          </p>
          <button
            className="mt-4 px-6 py-2 bg-[var(--main-yellow)] font-bold text-[var(--main-jean)] rounded-lg hover:bg-[var(--main-yellow)]"
            onClick={() => (window.location.href = "tel:+84965628195")}
          >
            Liên hệ ngay
          </button>
        </header>
      </div>

      {/* Background image with infinite scrolling effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-infinite-slide z-10"
        style={{ backgroundImage: "url('/Images/background_banner.png')" }}
      >
        {/* Content within the background */}
        <div className="flex justify-center items-center w-full h-full text-[#ffffff] relative z-10"></div>
      </div>
    </div>
  );
}
