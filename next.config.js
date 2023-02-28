/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_DOMAIN],
  },
  compiler: {
    emotion: true,
  },
  // experimental: {
  //   modern: true,
  //   edgeChunks: true,
  //   optimizeFonts: true,
  // },
};

module.exports = nextConfig;
