/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["d35xwkx70uaomf.cloudfront.net"] },
  //intercepting config for inline svg support
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
module.exports = nextConfig;
