const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
      myfile: './src/engine.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/main.js',
      publicPath: '/assets/'
    },
    devServer: {
      port: 1234,
      contentBase: path.join(__dirname, 'dist')
    }
}
