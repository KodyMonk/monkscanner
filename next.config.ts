import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.100.106",
    "192.168.100.106:3000",
    "http://192.168.100.106:3000",
  ],
};

export default nextConfig;