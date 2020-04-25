const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      critical: './src/webpack/assets/js/index.js',
      deferable: './src/webpack/assets/js/deferable.js',
      appbar: './src/webpack/assets/js/app-bar.js',
      collection: './src/webpack/assets/js/collection.js'
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/webpack', to: '', ignore: ['**/*.js'] }
    ]),
  ]
};