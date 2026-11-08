import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ข้ามการตรวจ Type Check ตอนรัน build บน Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // ข้ามการตรวจ ESLint ตอนรัน build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;