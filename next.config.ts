import type { NextConfig } from "next";

// GitHub Pages serve o site em /fenix-colchoes. Em domínio próprio, NEXT_PUBLIC_BASE_PATH="".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/fenix-colchoes";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
