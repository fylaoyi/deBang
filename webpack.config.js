var webpack = require('webpack');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css独立打包
var providePlugin = new webpack.ProvidePlugin({$:'jquery', jQuery:'jquery','window.jQuery':'jquery'});

module.exports = {
    entry: {debang:'./src/js/entry.js'},
    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:8080/out',
        path: __dirname + '/out'
    },
    module: {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {test: /.css$/, use: ['style-loader','css-loader']},
            {test: /.(jpg|png|gif|svg)$/,use: ['url-loader?limit=8192&name=./[name].[ext]']},
            {test: /.less$/, use: ['style-loader','css-loader','less-loader']}
        ]
    },
    plugins: [uglifyPlugin,CommonsChunkPlugin, providePlugin]//, new ExtractTextPlugin('[name].css')
}