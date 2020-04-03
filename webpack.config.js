const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      critical: './assets/js/index.js',
      deferable: './assets/js/deferable.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs/assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};