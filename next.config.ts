import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Assets are vendored into public/ rather than run through the image
  // optimizer, which also lets `next build` produce a static export.
  images: { unoptimized: true },
  ...(process.env.STATIC_EXPORT ? { output: "export" as const } : {}),
};

export default nextConfig;
