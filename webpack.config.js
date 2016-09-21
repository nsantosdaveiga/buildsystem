var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        './src/Style/style.scss',
        './src/JavaScript/main.js'
    ],
    output: {
        path: './public',
        filename: 'assets/js/main.js'
    },
    module: {
        loaders: [
            {test: /\.jade$/, loader: "jade"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.jade'
        }),
        new ExtractTextPlugin("./assets/style/style.css")
    ]
}