// Native
const {join} = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  target: 'electron-renderer'
};
