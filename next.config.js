/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
