const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://catsus.calstatela.edu' : undefined,
  publicRuntimeConfig: {
    APP_NAME: 'CEAS',
    API: 'http://localhost:3001/api',
    PRODUCTION: false,
    DOMAIN: 'http://localhost:3000',
    PUBLIC_FILES: 'http://localhost:3001/files/storage',
    SOCKET: 'http://localhost:3001'
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
//   assetPrefix: isProd ? 'http://54.84.85.196' : undefined,
//   publicRuntimeConfig: {
//     APP_NAME: 'Catsus',
//     API: 'http://54.84.85.196/api',
//     PRODUCTION: true,
//     DOMAIN: 'http://54.84.85.196',
//     PUBLIC_FILES: 'http://54.84.85.196/files/storage',
//     SOCKET: 'http://54.84.85.196:3001'
//   }
// }

