var hljs = require('highlight.js'); // https://highlightjs.org/

module.exports = {
    publicPath: '/',
    chainWebpack(config){
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            // markdown-it config
            wrapper: "content",
            raw: true,
            preset: 'default',
            breaks: true,
            preprocess: function(markdownIt, source) {
              return source;
            },
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(lang, str).value;
                  // eslint-disable-next-line no-empty
                  } catch (__) {}
                }
            
                return '';
              },
            use: [
              require('markdown-it')
            ]
          })
      },
    devServer: {
        disableHostCheck: true,
        proxy: 'http://localhost:4200'
    }
}
