/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
        destination: "https://yt-clone-ecru.vercel.app",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
