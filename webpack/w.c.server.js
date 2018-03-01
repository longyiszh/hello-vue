const { resolve, join } = require('path');
const { readdirSync } = require('fs');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const { root } = require('../lib/helpers');
const serverpath = root('src/server');

let nodeModules = {};

readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    'hello-vue': resolve(serverpath, 'hello-vue')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

  externals: nodeModules,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [

          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: resolve(serverpath, 'tsconfig.server.json')
            }
          }

        ],
        exclude:  /node_modules/
      }

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production',
      'process.env.VUE_ENV': '"server"'
    }),
    new CleanWebpackPlugin([`${root("dist/server")}/**`], {root: root("dist"), verbose: false}),
    new CopyWebpackPlugin([
      { 
        from: resolve(serverpath, "config"),
        to: 'config',
        ignore: [
          ".gitkeep"
        ]
      },
      { 
        from: resolve(serverpath, "static"),
        to: 'static',
        ignore: [
          ".gitkeep"
        ]
      }
    ]),

  ],

  output: {
    path: root('dist/server'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  }


}
