const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        site: ['./src/js/site.ts', './src/css/site.scss']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(s?(a|c)ss)$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './favicon/' }
            ]
        })
    ]
};