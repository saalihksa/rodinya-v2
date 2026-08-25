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
      { source: "/menu", destination: "https://sayndone.com/rodinyagalata", permanent: false },
      { source: "/about", destination: "/hakkimizda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/booking", destination: "/iletisim", permanent: true },
      { source: "/gallery", destination: "/galeri", permanent: true },
      { source: "/chef", destination: "/hikaye", permanent: true },
      { source: "/kitchen", destination: "/mekan", permanent: true },
      { source: "/chefs", destination: "/sefler", permanent: true },
      { source: "/blog", destination: "/yazilar", permanent: true },
      { source: "/blog/:slug", destination: "/yazilar/:slug", permanent: true },
      { source: "/shop", destination: "/magaza", permanent: true },
      { source: "/shop/:slug", destination: "/magaza/:slug", permanent: true },
      { source: "/cart", destination: "/sepet", permanent: true },
      { source: "/checkout", destination: "/odeme", permanent: true },
      { source: "/coming-soon", destination: "/yakinda", permanent: true },
      { source: "/portfolio", destination: "/portfolyo", permanent: true },
    ];
  },
};

export default nextConfig;
