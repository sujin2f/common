const ESLintPlugin = require('eslint-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const commonPaths = require('./paths')
const { createWebpackAliases } = require('./helpers')

module.exports = {
    entry: commonPaths.entryPath,
    module: {
        rules: [
            {
                // Assets loader
                // More information here https://webpack.js.org/guides/asset-modules/
                test: /\.(gif|jpe?g|tiff|png|webp|bmp|eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[hash][ext][query]',
                },
            },
            {
                test: /\.svg$/,
                issuer: /\.s[ac]ss$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[hash][ext][query]',
                },
            },
            {
                test: /\.svg$/,
                issuer: /\.tsx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        alias: createWebpackAliases({
            src: 'src',
        }),
    },
    plugins: [
        new WebpackManifestPlugin({
            publicPath: '',
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            fix: true,
            emitWarning: process.env.NODE_ENV !== 'production',
            configType: 'flat',
        }),
    ],

    devtool: 'source-map',
}
