/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this if not already present
  experimental: {
    serverComponentsExternalPackages: ["swiper"],
  },
};

module.exports = nextConfig;
