var hljs = require('highlight.js'); // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

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
              // do any thing
              return source;
            },
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(lang, str).value;
                  } catch (__) {}
                }
            
                return ''; // use external default escaping
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
