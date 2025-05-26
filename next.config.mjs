/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Désactive temporairement les Server Components pour éviter les conflits
  experimental: {
    serverComponents: false,
  },
  images: {
    domains: ['localhost']
  }
};

export default nextConfig;
