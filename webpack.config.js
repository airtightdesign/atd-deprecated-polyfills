const path = require('path');

module.exports = {
  entry: {
      'deprecated-polyfills': path.resolve(__dirname, './src/js/deprecated-polyfills.js')
    },
  output: {
    filename: 'atd-[name].js',
    path: path.resolve(__dirname, './dist/js')
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  }
};