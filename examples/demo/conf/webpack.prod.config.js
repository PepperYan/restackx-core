var webpack = require("webpack");
var config = require('./webpack.config');
var _ = require('lodash');

//不需要代码映射
config = _.omit(config, 'devtool');
//删除webpack-hot-middleware
config.entry.app =[
  '../static/index.jsx'
];

config.devtool = "source-map";
config.output.path = '../static-dist'

config.plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = config;
