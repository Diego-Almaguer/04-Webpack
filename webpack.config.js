const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
 },
 module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};





