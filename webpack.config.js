const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = glob.sync('src/**/*.html');

console.log(pages)

module.exports = {
  mode: 'development',
  entry: {
      critical: './src/javascript/index.js',
      deferable: './src/javascript/deferable.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist' 
  },
  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
      template: page,
      filename: page.replace('src/html/','')
    }))
  ]
};