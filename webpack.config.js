const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      critical: './src/assets/js/index.js',
      deferable: './src/assets/js/deferable.js'
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new CleanWebpackPlugin({ 
      cleanOnceBeforeBuildPatterns: ['!**/*', 'assets']
    }),
    new CopyPlugin([
      { from: 'src/', to: '', ignore: ['*.js','*.njk','*.md'] }
    ]),
  ]
};