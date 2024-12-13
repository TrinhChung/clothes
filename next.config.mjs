/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
