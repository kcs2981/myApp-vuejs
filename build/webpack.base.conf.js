// 从代码中看到，dev-server使用的webpack配置来自build/webpack.dev.conf.js文件（测试环境下使用的是build/webpack.prod.conf.js，这里暂时不考虑测试环境）。而build/webpack.dev.conf.js中又引用了webpack.base.conf.js，所以这里我先分析webpack.base.conf.js。
// webpack.base.conf.js主要完成了下面这些事情：
// 1、配置webpack编译入口
// 2、配置webpack输出路径和命名规则
// 3、配置模块resolve规则
// 4、配置不同类型模块的处理规则
// 说明： 这个配置里面只配置了.js、.vue、图片、字体等几类文件的处理规则，如果需要处理其他文件可以在module.rules里面配置

var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {// 给出正确的绝对路径
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {// 配置webpack编译入口
    app: './src/main.js'
  },
  output: {// 配置webpack输出路径和命名规则
    path: config.build.assetsRoot,// webpack输出的目标文件夹路径（例如：/dist）
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'// webpack编译输出的发布路径
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {// 配置模块resolve的规则
    extensions: ['.js', '.vue', '.json'], // 自动resolve的扩展名
    alias: {// 创建路径别名，有了别名之后引用模块更方便，例如:import Vue from ‘vue/dist/vue.common.js‘可以写成 import Vue from ‘vue‘
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: { // 配置不同类型模块的处理规则
    rules: [// 对src和test文件夹下的.js和.vue文件使用eslint-loader
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {// 对所有.vue文件使用vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {// 对src和test文件夹下的.js文件使用babel-loader
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {// 对图片资源文件使用url-loader，query.name指明了输出的命名规则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {// 对字体资源文件使用url-loader，query.name指明了输出的命名规则
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
