const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
    ],
  },
  pwa: {
    name: 'FTorre_WA',
    themeColor: '#32cd32',
    msTileColor: '#32cd32',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#32cd32',
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production',
  },
  devServer: {
    disableHostCheck: true,
  },
}
