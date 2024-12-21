import localFont from "next/font/local";

// Đảm bảo đường dẫn đúng tới font
export const geistSans = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: [
    {
      path: "../fonts/GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});
