/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static-export friendly so /mercosur works on GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
