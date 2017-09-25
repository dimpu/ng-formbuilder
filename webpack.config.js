const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',

        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                use: [
                    // 'ng-hot-reload-loader',
                    'angularjs-hot-loader',
                    'babel-loader'
                ],
                exclude: /node_modules/
            }

            , {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

            , {
                // SCSS loader
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

            , {
                // html loader
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // })
    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
}