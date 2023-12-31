/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://5394192439.for-seoul.synctreengine.com/:path*'
      }
    ];
  }
};

module.exports = nextConfig;
