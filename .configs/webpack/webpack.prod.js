const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const configDotenv = require('dotenv').configDotenv
const outputPath = require('./paths.js').outputPath

const rootDir = process.cwd()
configDotenv({ path: path.resolve(rootDir, '.env') })

if (!process.env.VERSION) {
    throw Error('Please add VERSION to your .env file')
}

module.exports = {
    mode: 'production',
    output: {
        publicPath: `/${process.env.VERSION}/`,
        filename: '[name].js',
        path: `${outputPath}/${process.env.VERSION}`,
        chunkFilename: '[name].[chunkhash].js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin(),
        ],
        splitChunks: {
            chunks: 'all',

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                },
                async: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'async',
                    chunks: 'async',
                    minChunks: 4,
                },
            },
        },
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name][hash].css',
        }),
    ],
}
