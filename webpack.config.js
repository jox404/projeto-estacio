const { watch } = require('fs')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filiname: 'bundle.js'
    },
    watch: true
}