const { join, resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
require('babel-polyfill');

const { root } = require('../../lib/helpers');
const clientpath = root('src/client');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      resolve(clientpath, 'client-entry.ts')
    ]
  },
  
  output: {
    path: root('dist/client'),
    filename: 'bundle.client.js'
  },

  // externals: Object.keys(require(root('package.json')).optionalDependencies),

  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              esModule: true,
              'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader'
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(clientpath, "tsconfig.client.json"),
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets/'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        /* Global scss */
        test: /\.scss$/,
        include: resolve(clientpath, 'styles.scss'), 
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']
          }
        )
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      root: root('node_modules')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  devtool: '#eval-source-map',
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
    ]),

    new ExtractTextPlugin("styles.css")

  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
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
    }),

    new VueSSRClientPlugin()

  ])
}
