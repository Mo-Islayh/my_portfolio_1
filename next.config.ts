import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/projects/market",
        destination: "https://store-jo.vercel.app",
        permanent: false,
      },
      {
        source: "/projects/speak-up",
        destination: "https://speak-up.herokuapp.com",
        permanent: false,
      },
      {
        source: "/projects/free4english",
        destination: "https://free4english.vercel.app",
        permanent: false,
      },
      {
        source: "/projects/my_tube",
        destination: "https://playback-stream.vercel.app",
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
