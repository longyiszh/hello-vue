const { join, resolve } = require('path');

const merge = require('webpack-merge');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('babel-polyfill');

const { root } = require('../lib/helpers');
const clientpath = root('src/client');

const baseconfig = require('./w.c.base');

let config = merge(baseconfig, {
  entry: {
    main: [
      'babel-polyfill',
      resolve(clientpath, 'client-entry.ts')
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(clientpath, 'index.html')
    }),

    new CopyWebpackPlugin([
      { 
        from: resolve(clientpath, 'statics'),
        to: 'statics',
        ignore: [".gitkeep"]
      }
    ])
  ]
});

if (process.env.NODE_ENV === 'production') {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new CleanWebpackPlugin([`${root('dist/client')}/**`], {root: root(), verbose: true}),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    })

  ])
}

module.exports = config;
