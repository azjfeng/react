const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //不能直接使用变量，需要使用对象形式
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        index:__dirname+"/src/index.js",
    },
    devtool: 'inline-source-map',                               //当文件有报错时会将错误指向源文件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
         title: 'Output Management',
         template:__dirname+'/src/index.html'
         }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
            {
            test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif|svg)$/,
            use: [
                    'file-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
              },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    //   plugins: ['babel-plugin-transform-runtime']
                    },
                    
                  },
                ]
            },
            {
                test:/\.ts$/,
                use:[
                    'ts-loader'
                ]
            },

        ]
    },
}