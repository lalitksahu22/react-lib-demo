const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argV) => {
    const isDev = argV.mode !== "production";
    return {
        entry: './src/index.js',
        externals: {
            react: 'react',
            "react-dom": 'react-dom'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            library: {
                //name: 'webpackdemo',
                type: 'commonjs2',
              },
            filename: isDev ? 'sf.[name].js' : 'sf.[name].[contenthash].js',
            clean: true,
            publicPath: './'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            ...(isDev ? [] : [new MiniCssExtractPlugin({
                filename: 'sf.[name].[contenthash].css'
            })]),
            new HtmlWebpackPlugin(
                {
                    template: './index.html'
                }
            )
        ],
        devtool: argV.mode == "production"? 'eval':'inline-source-map',
    }
};