import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Khu vực thử nghiệm 3D",
  description:
    "Trang thử nghiệm 3D nội bộ của dự án. Route này không phục vụ SEO hay lead generation.",
  path: "/blog",
  index: false,
});

export default function BlogLayout({ children }) {
  return children;
}
