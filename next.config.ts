import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // AVIF first, WebP as the fallback. Order matters: the first entry matching the
    // request's Accept header wins. Photography is the bulk of this site's weight, so
    // the extra AVIF encode is worth the build and cache cost.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
