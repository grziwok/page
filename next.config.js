/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    loader: "custom",
    path: '',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
