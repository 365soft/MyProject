const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  //theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  // title: penName + title,
  // description: '软件互助学习小站,办公软件,OFFICE,WPS,AI，装机必备,常用软件',
  // lang: 'zh-CN',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: [ 'h2', 'h3', 'h4', ],  //extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ],
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '软件互助学习小站',  //penName + title,
      description: '软件互助学习小站,办公软件,OFFICE,WPS,AI，装机必备,常用软件'
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: penName + title,
    //   description: 'softhub,office,wps,ai,deepseek,software'
    // }
  },
  head,
  plugins,
  themeConfig,
}
