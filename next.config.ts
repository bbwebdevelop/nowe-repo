import { NextConfig } from "next";
import { Configuration } from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname),
      },
    };
    return config;
  },
  env: {
    FORCE_BUILD: Date.now().toString(), // Dodanie zmiennej środowiskowej do wymuszenia nowego buildu
  },
};

export default nextConfig;
