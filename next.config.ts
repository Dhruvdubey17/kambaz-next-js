import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.staradvertiser.com"],
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
