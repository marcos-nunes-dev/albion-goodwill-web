/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Optional: Configure webpack to handle EPERM errors more gracefully
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.next'],
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
  // Add some additional options to help with file permissions
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // Increase timeout
  staticPageGenerationTimeout: 1000,
  // Configure allowed image domains
  images: {
    domains: ['render.albiononline.com'],
  },
};

module.exports = nextConfig; 