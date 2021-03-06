// 执行”npm run dev”时候最先执行的build/dev-server.js文件。该文件主要完成下面几件事情：
// 1、检查node和npm的版本
// 2、引入相关插件和配置
// 3、创建express服务器和webpack编译器
// 4、配置开发中间件（webpack-dev-middleware）和热重载中间件（webpack-hot-middleware）
// 5、挂载代理服务和中间件
// 6、配置静态资源
// 7、启动服务器监听特定端口（8080）
// 8、自动打开浏览器并打开特定网址（localhost:8080）
// 说明： express服务器提供静态文件服务，不过它还使用了http-proxy-middleware，一个http请求代理的中间件。前端开发过程中需要使用到后台的API的话，可以通过配置proxyTable来将相应的后台请求代理到专用的API服务器。

require('./check-versions')();//检测node和npm版本

var config = require('../config');
if (!process.env.NODE_ENV) {// 如果Node的环境变量中没有设置当前的环境（NODE_ENV），则使用config中的配置作为当前的环境
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn');//自动open
var path = require('path');
var express = require('express');// 一个express中间件，用于将http请求代理到其他服务器
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');// 这里使用该插件可以将前端开发中涉及到的请求代理到API服务器上，方便与服务器对接
var webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;// dev-server 监听的端口，默认为config.dev.port设置的端口，即8080
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;// 用于判断是否要自动打开浏览器的布尔变量，当配置文件中没有设置自动打开浏览器的时候其值为 false
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;// 定义 HTTP 代理表，代理到 API 服务器
var app = express();// 创建1个 express 实例
var compiler = webpack(webpackConfig);// 根据webpack配置文件创建Compiler对象


var nav = require('../static/json/nav.json');
var userList = require('../static/json/userList.json');
var apiRoutes = express.Router();
apiRoutes.get('/nav', function (req, res) {//配置api路由
  res.json({
    errno: 0,
    data: nav
  });
});

apiRoutes.get('/userList', function (req, res) {//配置api路由
  res.json({
    errno: 0,
    data: userList
  });
});
app.use('/api', apiRoutes);




// webpack-dev-middleware使用compiler对象来对相应的文件进行编译和绑定
// 编译绑定后将得到的产物存放在内存中而没有写进磁盘
// 将这个中间件交给express使用之后即可访问这些编译后的产品文件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

// webpack-hot-middleware，用于实现热重载功能的中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

// 当html-webpack-plugin提交之后通过热重载中间件发布重载动作使得页面重载
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb()
  })
});

// 将 proxyTable 中的代理请求配置挂在到express服务器上
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  // 格式化options，例如将‘www.example.com‘变成{ target: ‘www.example.com‘ }
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
});

// handle fallback for HTML5 history API
// 重定向不存在的URL，常用于SPA
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
// 使用webpack开发中间件
// 即将webpack编译后输出到内存中的文件资源挂到express服务器上
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
// 将热重载中间件挂在到express服务器上
app.use(hotMiddleware);

// serve pure static assets
// 静态资源的路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));// 将静态资源挂到express服务器上

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');// webpack开发中间件合法（valid）之后输出提示语到控制台，表明服务器已启动
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {// 如果符合自动打开浏览器的条件，则通过opn插件调用系统默认浏览器打开对应的地址uri
    opn(uri)
  }
  _resolve()
});

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
};
