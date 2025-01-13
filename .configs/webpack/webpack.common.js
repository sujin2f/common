const ESLintPlugin = require('eslint-webpack-plugin')
const WebpackManifestPlugin =
    require('webpack-manifest-plugin').WebpackManifestPlugin
const entryPath = require('./paths.js').entryPath
const createWebpackAliases = require('./helpers.js').createWebpackAliases

module.exports = {
    entry: entryPath,
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
            extensions: ['ts', 'tsx'],
            fix: true,
            configType: 'flat',
        }),
    ],

    devtool: 'source-map',
}
