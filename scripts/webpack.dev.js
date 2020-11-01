const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { outputPath, root } = require('./path.js');
const webpackCommon = require('./webpack.common.js');

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: `${root}/src`,
    hot: true,
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
