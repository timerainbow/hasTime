const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // {loader: "style-loader"},
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
        }),
        new HtmlWebpackPlugin(
            {
                template: './src/page/page1.html', //指定要打包的html路径和文件名
                filename:'./page/page1.html' //指定输出路径和文件名
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/page/page2.html',
                filename:'./page/page2.html'
            }
        )
    ]
};