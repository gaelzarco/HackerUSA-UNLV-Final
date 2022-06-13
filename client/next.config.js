/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/user',
        destination: 'http://localhost:5000/user' // Proxy to Backend
      }
    ]
  }
}
