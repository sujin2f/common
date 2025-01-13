const merge = require('webpack-merge').default
const common = require('./webpack/webpack.common.js')

const envs = {
    development: 'dev',
    production: 'prod',
}
// eslint-disable-next-line no-undef
const env = envs[process.env.NODE_ENV || 'development']
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const envConfig = require(`./webpack/webpack.${env}.js`)

module.exports = merge(common, envConfig)
