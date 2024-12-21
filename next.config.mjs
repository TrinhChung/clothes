/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    localPatterns: [
      {
        pathname: "/Images/**",
        search: "",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
