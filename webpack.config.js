const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
          fallback: ['vue-style-loader'],
          use: [
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin('css/app.css'),
  ],
  devtool: process.env.NODE_ENV === 'production' ? '#source-map' : '#eval-source-map',
};
