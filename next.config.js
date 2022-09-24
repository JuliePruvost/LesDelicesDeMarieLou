// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/LesDelicesDeMarieLou' : '',
  assetPrefix: isProd ? '/LesDelicesDeMarieLou/' : '',
  /*images: {
    unoptimized: true,
  },*/
}