import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/template-elegant",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
