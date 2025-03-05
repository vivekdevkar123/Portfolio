/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  disable: false, // enable PWA in production mode
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export', // Add this line
};

module.exports = withPWA(nextConfig);
