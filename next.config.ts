import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/schilderen-lichtenvoorde", destination: "/schilderwerk", permanent: false },
      { source: "/schilderen", destination: "/schilderwerk", permanent: false },
      { source: "/over-dankbaar", destination: "/over-ons", permanent: false },
      { source: "/9-btw-regeling", destination: "/9-procent-btw", permanent: false },
      { source: "/vacatures", destination: "/vacature", permanent: false },
    ];
  },
};

export default nextConfig;
