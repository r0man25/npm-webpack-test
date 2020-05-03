const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // entry: './test.js', //точка входа, якщо нема то /srs/index.js
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Test app',
        template: './src/index.html',
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        sockHost: '0.0.0.0',
        sockPort: 8081,
        overlay: true, //отладка в вебі
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
};