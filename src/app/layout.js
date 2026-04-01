import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import {
  absoluteUrl,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.businessName,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.defaultKeywords,
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.businessName,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  verification: {
    google: siteConfig.googleVerification,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const rootSchemas = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
  ];

  return (
    <html lang="vi">
      <body className="antialiased bg-background text-on-surface">
        <StructuredData data={rootSchemas} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
