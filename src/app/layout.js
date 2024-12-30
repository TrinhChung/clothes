import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { geistMono, geistSans } from "@/utils/constantFont";
export const metadata = {
  title: "Lan Chuẩn Clothes - Xưởng May Chuyên Nghiệp",
  description:
    "Chúng tôi cung cấp dịch vụ may đo quần áo thời trang chất lượng cao với giá hợp lý.",
  openGraph: {
    title: "Lan Chuẩn - Xưởng may chuyên nghiệp",
    description:
      "Chúng tôi cung cấp dịch vụ may đo quần áo thời trang chất lượng cao với giá hợp lý.",
    url: "https://clothpro.smartrent.id.vn/",
    image: "/Images/meta.jpg",
    type: "website",
    site_name: "Lan Chuẩn",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lan Chuẩn - Xưởng may chuyên nghiệp",
    description:
      "Chúng tôi cung cấp dịch vụ may đo quần áo thời trang chất lượng cao với giá hợp lý.",
    image: "https://clothpro.smartrent.id.vn/Images/meta.jpg",
  },
  keywords: [
    "may mặc",
    "quần áo",
    "thời trang",
    "đồng phục học sinh",
    "xưởng may tận gốc",
    "xưởng may giá rẻ",
    "xưởng may",
    "Lan Chuẩn Clothes",
    "Lan Chuan",
  ],
  author: "Lan Chuẩn Clothes",
  googleSiteVerification: "d8P9gAOJ38enrUV5LA7GZ6iFvDnywmEsuGKx7NdsGDo",
  canonical: "https://clothpro.smartrent.id.vn/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif", // Font fallback
        }}
      >
        {/* Navbar Section */}
        <Navbar />
        <div
          className="grid grid-rows-[auto_auto_1fr_auto] items-center justify-items-center min-h-screen
             sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-[var(--background)] text-[var(--foreground)]"
        >
          {children}
        </div>
        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}
