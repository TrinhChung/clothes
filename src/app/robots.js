import { siteConfig } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login/", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
