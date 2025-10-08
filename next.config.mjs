// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.321apollo.com",
//       },
//       {
//         protocol: "http",
//         hostname: "api.321apollo.com",
//       }
//     ],
//   },
// };

// export default nextConfig;

// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
}

export default nextConfig