/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
