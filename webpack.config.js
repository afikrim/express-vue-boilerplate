const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [path.resolve(__dirname, 'resources', 'js', 'app.js'), path.resolve(__dirname, 'resources', 'sass', 'app.scss')],
  output: {
    filename: 'js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
  ],
};
