//vue-loader.conf则只配置了css加载器以及编译css之后自动添加前缀

var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({  // css加载器
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
};
