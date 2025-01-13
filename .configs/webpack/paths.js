const path = require('path')

// eslint-disable-next-line no-undef
const root = process.cwd()
module.exports.root = root
const baseDir = path.resolve(
    root,
    '.build',
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV || '',
)
const outputPath = path.resolve(baseDir, 'frontend')
module.exports.outputPath = outputPath
const entryPath = {
    main: path.resolve(root, 'src/frontend/index.tsx'),
}
module.exports.entryPath = entryPath
