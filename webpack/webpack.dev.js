const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const commonPaths = require('./paths')

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true,
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    devtool: 'source-map',
}
