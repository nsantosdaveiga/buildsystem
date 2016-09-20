var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['./src/Style/style.scss','./src/JavaScript/main.js'],
    output: {
        path: './public',
        filename: 'js/main.js',
    },
    module: {
        loaders: [
            {test: /\.jade$/, loader: "jade"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.jade'
        }),
        new ExtractTextPlugin("./style/style.css")
    ]
}