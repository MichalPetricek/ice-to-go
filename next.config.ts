import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For custom domain icetogo.cz, no basePath needed
  // If deploying to username.github.io/repo-name, uncomment:
  // basePath: "/ice-to-go",
};

export default nextConfig;
