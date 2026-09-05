/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/convoy-cloud", destination: "/glenr", permanent: true }];
  },
};

export default nextConfig;
