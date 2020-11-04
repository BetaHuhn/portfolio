module.exports = {
    publicPath: '/',

    devServer: {
        disableHostCheck: true,
        proxy: 'http://localhost:4200'
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
