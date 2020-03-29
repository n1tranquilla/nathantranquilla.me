const path = require('path');

module.exports = {
  entry: {
      critical: './src/index.js',
      deferable: './src/deferable.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};