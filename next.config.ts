import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/booking", destination: "/contact", permanent: true },
      { source: "/menu", destination: "https://sayndone.com/rodinyagalata", permanent: false },
    ];
  },
};

export default nextConfig;
