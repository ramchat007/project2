/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['api.themoviedb.org', 'image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
