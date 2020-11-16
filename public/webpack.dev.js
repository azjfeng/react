const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");
const webpack = require('webpack');
module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: '/dev',
    //  host: "0.0.0.0",
     hot: true
   },
   plugins: [
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
       }),
       new UglifyJSPlugin()
  ],
   output:{
    filename:"[name].[hash].bundle.js",
    chunkFilename: '[name].[hash].bundle.js',
    path:path.resolve(__dirname,"dev")
},
mode:"production"
 });
