var path = require('path')
var webpack = require('webpack');
var path_node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache:true,
  devtool: "source-map",
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './src/modules/index.jsx'
    ],
  },
  output: {
    path: path.resolve(__dirname, '../static-dist'),
    publicPath: "/",
    filename: '[name].js',
    pathinfo: true
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /(node_modules|bower_components)/},
       {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      },
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: 'index',
        cdn:"./static/css",
        showErrors:false,
        hash:true, //prevent cache
        template: './static/template.html'
    }),
  ]
}
