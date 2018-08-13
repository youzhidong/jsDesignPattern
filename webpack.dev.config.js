const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,  
                use: 'babel-loader',
                exclude: "/(node_modules)/"
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "index.html"),
        // open: true, // 自动打开浏览器
        port: 9000
    }
}