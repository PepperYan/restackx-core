var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = new(express)();
var port = 3010;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/vendors.js', express.static(path.join(__dirname, 'static-dist/vendors.js')));
app.use('/app.js', express.static(path.join(__dirname, 'static-dist/app.js')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static-dist/index.html'));
  // res.send("hello world");
});

var httpProxy = require('http-proxy');
//代理到后端服务
var proxy = new httpProxy.createProxyServer({});
// 代理中间件，只代理url包含/api的请求
app.use(function(req, res, next) {
  if (req.url.match(new RegExp('^\/canteen-orders\/api\/'))) {
    console.log('proxy to: 10.108.10.174');
    proxy.web(req, res, {
      target: 'http://10.108.1.198:8888'
    }, function(err) {
      console.error(err);
    });
  } else if (req.url.match(new RegExp('^\/canteen-restaurants\/api\/'))) {
    console.log('proxy to: 10.108.10.174');
    proxy.web(req, res, {
      target: 'http://10.108.1.198:8887'
    }, function(err) {
      console.error(err);
    });
  } else {
    next();
  }
});

app.get("/health", function(req, res) {
  console.log('健康检查');
  res.status(200).send("OK");
})



app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
