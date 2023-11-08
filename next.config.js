/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.DOMAIN}`,
      },
    ],
  },
};

module.exports = nextConfig;
