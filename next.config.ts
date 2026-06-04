import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.roasintheblack.com" }],
        destination: "https://roasintheblack.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
