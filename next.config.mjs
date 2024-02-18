/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",  // <=== enables static exports
  images: { unoptimized: true }
};

export default nextConfig;
