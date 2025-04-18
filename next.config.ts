import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'billions-api.nomadcoders.workers.dev',
      },
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
      },
      {
        protocol: 'https',
        hostname: 'undefined',
      },
    ],
  },
};

export default nextConfig;
