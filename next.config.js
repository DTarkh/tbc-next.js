/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };
