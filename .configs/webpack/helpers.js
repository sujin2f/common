const path = require('path')
// eslint-disable-next-line no-undef
const cwd = process.cwd()

/**
 * Create webpack aliases
 */
const createWebpackAliases = (aliases) => {
    const result = {}
    for (const name in aliases) {
        result[name] = path.join(cwd, aliases[name])
    }
    return result
}

module.exports.createWebpackAliases = createWebpackAliases
