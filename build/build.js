// 构建环境下的配置。执行”npm run build”的时候首先执行的是build/build.js文件，build.js主要完成下面几件事：
// 1、loading动画
// 2、删除创建目标文件夹
// 3、webpack编译
// 4、输出信息
// 说明： webpack编译之后会输出到配置里面指定的目标文件夹；删除目标文件夹之后再创建是为了去除旧的内容，以免产生不可预测的影响。

require('./check-versions')();// 检查NodeJS和npm的版本

process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var chalk = require('chalk');// 用于在控制台输出带颜色字体的插件
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.prod.conf');

var spinner = ora('building for production...');
spinner.start();// 开启loading动画

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(webpackConfig, function (err, stats) {// webpack编译
    spinner.stop(); // 停止loading动画
    if (err) throw err;
    process.stdout.write(stats.toString({ // 没有出错则输出相关信息
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
});
