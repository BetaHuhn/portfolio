module.exports = {
    publicPath: '/',
    devServer: {
        disableHostCheck: true,
        proxy: 'http://localhost:4200'
    }
}
