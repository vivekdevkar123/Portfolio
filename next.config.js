/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // Enable PWA in production
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai", // External Image Loader (Compatible with `next export`)
    path: "/Portfolio/", // Set the correct path prefix for GitHub Pages
    unoptimized: true, // Important to display static images without optimization
  },
  trailingSlash: true, // Important for GitHub Pages
  basePath: "/Portfolio", // Your GitHub repository name
  assetPrefix: "/Portfolio/", // This will load CSS and images correctly
};

module.exports = withPWA(nextConfig);
