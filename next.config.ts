import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root. Without this, Turbopack sees the stray
  // package-lock.json in the home folder and treats the whole home
  // directory as the workspace, which makes `npm run dev` hang.
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["192.168.100.106", "192.168.100.122"],
};

export default nextConfig;
