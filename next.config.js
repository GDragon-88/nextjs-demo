/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  env: {
    NAME: '1213'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos'
      },
      // {
      //   protocol: 'https',
      //   hostname: 'hydeparkwinterwonderland.com'
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'wembleypark.com'
      // },
    ]
  }
}

module.exports = nextConfig
