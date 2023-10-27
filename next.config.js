const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   reactStrictMode: true,
//   assetPrefix: isProd ? 'https://catsus.calstatela.edu' : undefined,
//   publicRuntimeConfig: {
//     APP_NAME: 'API',
//     API: 'http://localhost:3001/api',
//     PRODUCTION: false,
//     DOMAIN: 'http://localhost:3000',
//     PUBLIC_FILES: 'http://localhost:3001/files/storage',
//     SOCKET: 'http://localhost:3001'
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   }
// }

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'API',
    API: 'http://54.84.85.196:3001/api',
    PRODUCTION: false,
    DOMAIN: 'http://54.84.85.196:3000',
    PUBLIC_FILES: 'http://54.84.85.196:3001/files/storage',
    SOCKET: 'http://54.84.85.196:3001'
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}