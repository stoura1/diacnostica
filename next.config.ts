import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Allow phone on local network to load javascript!
  allowedDevOrigins: ['192.168.1.170', 'http://192.168.1.170', '192.168.1.170:3000'],
};

export default nextConfig;
