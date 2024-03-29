const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const mainConfig = require('./main.webpack.config');

const devConfig = {
  mode: 'development',
  devtool: '#eval-source-map',
  entry: ['./src/index.jsx', './assets/less/global.less'],

  output: {
    filename: './js/[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  devServer: {
    hot: true,
    host: 'localhost',
    port: 3001,
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: {
      errors: false,
      warnings: false,
    },
    contentBase: [path.join(__dirname, 'public')],
    watchContentBase: true,
    open: 'google-chrome',
    stats: {
      assets: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      depth: false,
      entrypoints: false,
      hash: false,
      outputPath: false,
      performance: false,
      providedExports: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: false,
      usedExports: false,
      version: false,
      modules: false,
      colors: true,
      errors: true,
      errorDetails: false,
      warnings: true,
    },
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'public/**/*')],
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/favicon',
        to: './assets/favicon',
      },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './assets/html/index.html'),
    }),
    new CleanTerminalPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

const config = merge(mainConfig, devConfig);
module.exports = config;
