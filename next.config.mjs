/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },

  // poweredByHeader: false,

  reactStrictMode: true,

  // rewrites: async () => {
  //   return [{ destination: "/api/heartbeat", source: "/heartbeat" }];
  // },

  swcMinify: true,
  // webpack: (config) => {
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       fs: false,
  //       os: false,
  //       path: false,
  //     },
  //   };
  //   return config;
  // },
};

export default nextConfig;
