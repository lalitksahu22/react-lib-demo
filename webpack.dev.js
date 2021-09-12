const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');


let customMerge= merge.mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: 'prepend'
        },
    },
    plugins: 'append'
});

module.exports = customMerge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        publicPath: '/' //it is used for 2 purpose- html template js,css file and webpackdevserver
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
        port: 3000
      },
      devtool: 'inline-source-map',
});