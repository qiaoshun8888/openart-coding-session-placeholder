/** @type {import('next').NextConfig} */

const exec = require('child_process');
const nextConfig = {
  generateBuildId: async () => {
    const commitHash = exec.execSync('git rev-parse HEAD').toString().trim();
    const commitTime = exec
      .execSync('git show -s --format=%ci')
      .toString()
      .trim();
    return `${commitHash}-${commitTime}`;
  },
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  // Next.js configurations that redirects www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.openart.ai' }],
        destination: 'https://openart.ai/:path*',
        permanent: true,
      },
    ];
  },
  experimental: {
    scrollRestoration: true,
    images: {
      // we have to disable next image optimization unless we use the flexible GAE environment or depoly to Vercel
      // https://github.com/vercel/next.js/discussions/12474#discussioncomment-1105307
      // https://nextjs.org/docs/api-reference/next/image#unoptimized
      unoptimized: true,
      allowFutureImage: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// https://github.com/jotaijs/jotai-devtools/issues/47#issuecomment-1489367114
const withTranspileModules = require('next-transpile-modules')([
  'jotai-devtools',
]);
module.exports = withTranspileModules(nextConfig);
