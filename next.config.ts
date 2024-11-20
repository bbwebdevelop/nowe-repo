import path from "path";
import type { Configuration } from "webpack";

const nextConfig = {
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
    FORCE_BUILD: Date.now().toString(), 
  },
};

export default nextConfig;
