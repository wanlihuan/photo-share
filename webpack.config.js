var webpack = require ('webpack');

// 将共用React组件合并打包到指定文件common.js中;
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin ({name: 'common', minChunks: 2});
var autoprefixer = require('autoprefixer');
module.exports = {

    plugins: [commonsPlugin],
    entry: {
        "material-home" : './views/material/home/home.jsx',
        "material-homeSend" : './views/material/home/homeSend.jsx',
        "material-login" : './views/material/login/login.jsx',
        "material-register" : './views/material/register/register.jsx'
    },
    output: {
        path: './dist/scripts',
        filename: '[name].js' // Template based on keys in entry above
    },
    module: {
        loaders: [
            {test: /\.jsx$/,    exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.(less)$/, exclude: /node_modules/,  loader: "style!css?sourceMap!postcss!less?sourceMap"},
            {test: /\.(css)$/, loader: "style!css?sourceMap!postcss"},
            {test: /.(svg|png|jpg|otf)$/, exclude: /node_modules/, loader: 'url-loader'}
        ]
    },
    postcss: [
        autoprefixer({
          browsers: ['last 5 versions', '> 1%']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    }
    // ,
    // 插件配置: 此处使用共享插件
    // plugins: [commonsPlugin, new ExtractTextPlugin("[name].less")]
    // var ExtractTextPlugin = require("extract-text-webpack-plugin");
// { test: /\.(css|less)$/,  exclude: /node_modules/,  loader: ExtractTextPlugin.extract('style!css!less')},
// var  ExtractTextPlugin=new ExtractTextPlugin('all.css', {allChunks: true});
};