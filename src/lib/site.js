export const siteConfig = {
  siteName: "Xưởng may Lan Chuẩn",
  alternateName: "Fabricon",
  businessName: "Xưởng may Lan Chuẩn",
  title: "Xưởng may Lan Chuẩn",
  description:
    "Xưởng may Lan Chuẩn nhận gia công may mặc, đồng phục và may mẫu theo yêu cầu. Tư vấn chất liệu, kiểm soát QC và giao hàng đúng tiến độ cho khách hàng B2B tại Việt Nam.",
  url: "https://fabricon.noirsteed.com",
  locale: "vi_VN",
  ogImage: "/Images/meta.webp",
  logo: "/Images/logo.webp",
  phone: "+84965628195",
  phoneDisplay: "+84 965 628 195",
  email: "chungtrinh2k2@gmail.com",
  zaloUrl: "https://zalo.me/+84965628195",
  googleVerification: "d8P9gAOJ38enrUV5LA7GZ6iFvDnywmEsuGKx7NdsGDo",
  addressText: "Tuyên Bá, Quảng Phú, Lâm Thao, Bắc Ninh 223500, Việt Nam",
  address: {
    streetAddress: "Tuyên Bá, Quảng Phú, Lâm Thao",
    addressRegion: "Bắc Ninh",
    postalCode: "223500",
    addressCountry: "VN",
  },
  defaultKeywords: [
    "xưởng may",
    "xưởng may gia công",
    "xưởng may đồng phục",
    "gia công may mặc",
    "may mẫu",
    "may OEM",
    "may ODM",
    "xưởng may Bắc Ninh",
    "Lan Chuẩn",
    "Fabricon",
  ],
};

export const servicePages = [
  {
    id: "may-gia-cong",
    name: "May gia công thời trang",
    path: "/services/may-gia-cong",
    description:
      "Dịch vụ may gia công thời trang cho local brand, shop và đơn vị cần sản xuất theo mẫu với quy trình QC nhiều lớp.",
  },
  {
    id: "dong-phuc",
    name: "May đồng phục doanh nghiệp",
    path: "/services/dong-phuc",
    description:
      "Giải pháp may đồng phục công sở, trường học và tổ chức với form chuẩn, chất liệu bền và hỗ trợ in thêu logo.",
  },
  {
    id: "may-mau",
    name: "May mẫu và phát triển rập",
    path: "/services/may-mau",
    description:
      "Lan Chuẩn hỗ trợ phát triển rập, may mẫu đối chiếu và tinh chỉnh thông số trước khi sản xuất hàng loạt.",
  },
  {
    id: "tu-van-vai",
    name: "Tư vấn chất liệu vải",
    path: "/services/tu-van-vai",
    description:
      "Tư vấn chọn chất liệu vải, phụ liệu và giải pháp hoàn thiện phù hợp với mục tiêu sử dụng và ngân sách.",
  },
];

export function getServicePageById(id) {
  return servicePages.find((service) => service.id === id) ?? servicePages[0];
}
