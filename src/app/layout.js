import localFont from "next/font/local";
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
          className="row-start-1 w-full flex flex-col gap-1 items-start text-left bg-[var(--main-green)] py-6 px-16"
        >
          {/* Thêm tên thương hiệu ở đây */}
          <h2 className="text-3xl font-bold font-bold text-[var(--main-yellow)] uppercase pb-4 pt-8">
            Xưởng may Lan Chuẩn
          </h2>

          <p className="text-white">
            Số điện thoại: 0965628195
          </p>
          <p className="text-white">
            Email: chungtrinh2k2@gmail.com
          </p>
          <p className="text-white">
            &copy; 2024 Xưởng May Lan Chuẩn. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
