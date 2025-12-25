/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'miro.medium.com',
    //     port: '',
    //     pathname: '/**', // Allows any path under this hostname
    //   },
    // ],
  },
};

module.exports = nextConfig;