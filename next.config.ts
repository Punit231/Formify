import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Allow up to 5MB in request body
      allowedOrigins: ["http://localhost:3000", ""], // Allow localhost (development) and production domain
    },
  },
};

export default nextConfig;