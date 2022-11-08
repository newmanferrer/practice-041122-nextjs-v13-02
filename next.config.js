//* ---------------------------------------------------------------------------
//* NOTES
//* ---------------------------------------------------------------------------
// runtime: 'experimental-edge', // 'node.js' (default) | experimental-edge
//* ---------------------------------------------------------------------------

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'nodejs'
  }
}

module.exports = nextConfig
