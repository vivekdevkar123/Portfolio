/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // Enable PWA for production
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai", // Use an external image loader
    path: "",
  },
  trailingSlash: true, // Required for GitHub Pages
};

module.exports = withPWA(nextConfig);
