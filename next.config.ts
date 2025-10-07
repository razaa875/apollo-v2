import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.321apollo.com",
      },
      {
        protocol: "http",
        hostname: "api.321apollo.com",
      }
    ],
  },
};

export default nextConfig;
