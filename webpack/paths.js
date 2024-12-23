const path = require('path')

module.exports = {
    root: path.resolve(__dirname, '../'),
    outputPath: path.resolve(__dirname, '../', '.build/development/frontend'),
    entryPath: path.resolve(__dirname, '../', 'src/frontend/index.tsx'),
    templatePath: path.resolve(__dirname, '../', 'public/index.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
}
