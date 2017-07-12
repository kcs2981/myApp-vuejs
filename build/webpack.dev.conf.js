// webpack.dev.conf.js，这里面在webpack.base.conf的基础上增加完善了开发环境下面的配置，主要包括下面几件事情：
// 1、将hot-reload相关的代码添加到entry chunks
// 2、合并基础的webpack配置
// 3、使用styleLoaders
// 4、配置Source Maps
// 5、配置webpack插件


var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');// 一个可以合并数组和对象的插件
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');// 一个用于生成HTML文件并自动注入依赖文件（link/script）的webpack插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');// 用于更友好地输出webpack的警告、错误等信息

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {// 合并基础的webpack配置
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })// 配置样式文件的处理规则，使用styleLoaders
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',// 配置Source Maps。在开发中使用cheap-module-eval-source-map更快
  plugins: [ // 配置webpack插件
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    // 后页面中的报错不会阻塞，但是会在编译结束后报错
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
