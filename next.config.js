module.exports = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: '/api2/:path*',
        destination: 'http://localhost:8000/api2/:path*'
      }
    ];
  }
}
