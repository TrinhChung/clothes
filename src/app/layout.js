import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

// Đảm bảo đường dẫn đúng tới font
const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Lan Chuẩn Clothes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Lan Chuẩn Clothes - Xưởng May Chuyên Nghiệp</title>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Lan Chuẩn - Xưởng may chuyên nghiệp"
        />
        <meta
          property="og:description"
          content="Chúng tôi cung cấp dịch vụ may đo quần áo thời trang chất lượng cao với giá hợp lý."
        />
        <meta property="og:url" content="https://clothpro.smartrent.id.vn/" />
        <meta
          property="og:image"
          content="https://clothpro.smartrent.id.vn/Images/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lan Chuẩn" />
        <meta property="og:locale" content="vi_VN" />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lan Chuẩn - Xưởng may chuyên nghiệp"
        />
        <meta
          name="twitter:description"
          content="Chúng tôi cung cấp dịch vụ may đo quần áo thời trang chất lượng cao với giá hợp lý."
        />
        <meta
          name="twitter:image"
          content="https://clothpro.smartrent.id.vn/Images/logo.png"
        />

        <meta
          name="description"
          content="Lan Chuẩn Clothes cung cấp dịch vụ may mặc chất lượng cao với giá cả phải chăng."
        />
        <meta
          name="keywords"
          content="may mặc, quần áo, thời trang, đồng phục học sinh, xưởng may tận gốc, tận gốc, xưởng may giá rẻ, xưởng may, Lan Chuẩn Clothes, Xưởng may Lan Chuẩn, lan chuan, Lan Chuan, Trịnh Văn Chung, TrinhChung"
        />
        <meta name="author" content="Lan Chuẩn Clothes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Lan Chuẩn Clothes" />
        <meta
          property="og:description"
          content="Xưởng may chuyên nghiệp tại Việt Nam."
        />
        <meta property="og:image" content="/Images/logo.png" />
        <meta property="og:url" content="https://clothpro.smartrent.id.vn/" />
        <link rel="canonical" href="https://clothpro.smartrent.id.vn/" />
        <meta
          name="google-site-verification"
          content="d8P9gAOJ38enrUV5LA7GZ6iFvDnywmEsuGKx7NdsGDo"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif", // Font fallback
        }}
      >
        {children}
        {/* Footer Section */}
        <footer
          id="contact"
          className="w-full flex flex-col lg:flex-row gap-6 text-left bg-[var(--main-green)] py-6 px-4 sm:px-8 lg:px-16"
        >
          {/* Cột đầu tiên - Thông tin liên hệ */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-[var(--main-yellow)] uppercase pb-4 pt-8">
              Xưởng may Lan Chuẩn
            </h2>
            <p className="text-white">
              Số điện thoại:{" "}
              <a
                href="tel:+84965628195"
                className="text-yellow-500 font-semibold hover:text-yellow-400"
              >
                0965628195
              </a>
            </p>
            <p className="text-white">
              Email:{" "}
              <a
                href="mailto:chungtrinh2k2@gmail.com"
                className="text-yellow-500 font-semibold hover:text-yellow-400"
              >
                chungtrinh2k2@gmail.com
              </a>
            </p>

            <p className="text-white">
              &copy; 2024 Xưởng May Lan Chuẩn. All rights reserved.
            </p>
          </div>

          {/* Cột thứ hai - Google Map */}
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5077027626303!2d106.15688317510468!3d21.01236218063282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359fa84bf078d1%3A0x495360d92cf675ee!2zWMaw4bufbmcgTWF5IExhbiBDaHXhuqlu!5e0!3m2!1sja!2sjp!4v1734086395486!5m2!1sja!2sjp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </footer>
      </body>
    </html>
  );
}
