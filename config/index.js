// config文件夹下最主要的文件就是index.js了，在这里面描述了开发和构建两种环境下的配置，
// 前面的build文件夹下也有不少文件引用了index.js里面的配置。

// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  build: { // 构建产品时使用的配置
    env: require('./prod.env'),// webpack的编译环境
    index: path.resolve(__dirname, '../dist/index.html'),// 编译输入的index.html文件
    assetsRoot: path.resolve(__dirname, '../dist'),// webpack输出的目标文件夹路径
    assetsSubDirectory: 'static',// webpack编译输出的二级文件夹
    assetsPublicPath: '/',// webpack编译输出的发布路径
    productionSourceMap: true,// 使用SourceMap
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,// 默认不打开开启gzip模式
    productionGzipExtensions: ['js', 'css'],// gzip模式下需要压缩的文件的扩展名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: { // 开发过程中使用的配置
    env: require('./dev.env'),// webpack的编译环境
    port: 8080,// dev-server监听的端口
    autoOpenBrowser: true,// 启动dev-server之后自动打开浏览器
    assetsSubDirectory: 'static',// webpack编译输出的二级文件夹
    assetsPublicPath: '/',// webpack编译输出的发布路径
    proxyTable: {},// 请求代理表，在这里可以配置特定的请求代理到对应的API接口   例如将‘/api/xxx‘代理到‘www.example.com/api/xxx‘
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false// 是否开启 cssSourceMap
  }
};
