const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path")
module.exports = merge(common, {
   devtool: 'source-map',
   plugins: [
     new UglifyJSPlugin(),
     new UglifyJSPlugin({
        sourceMap: true
     }),
     new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
        }),
      //   new config.optimization.splitChunks({
      //    name: 'common', // 指定公共 bundle 的名称。,
      //    filename: 'common.[hash].js'
      // })
   ],
   output:{
      filename:"[name].[hash].bundle.js",
      chunkFilename: '[name].[hash].bundle.js',
      path:path.resolve(__dirname,"dist")
  },


 });