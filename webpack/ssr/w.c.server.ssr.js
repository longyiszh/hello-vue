const { join, resolve } = require('path');
// const { readdirSync } = require('fs');

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals')

// const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// require('babel-polyfill');

const { root } = require('../../lib/helpers');
const clientpath = root('src/client');

// let nodeModules = {};

// readdirSync('node_modules')
//   .filter((x) => {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach((mod) => {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });


module.exports = {
  entry: {
    main: [
      resolve(clientpath, 'server-entry.ts')
    ]
  },
  
  output: {
    path: root('dist/client'),
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2' // !different
  },

  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: [/\.css$/, /\.vue$/, /\.scss$/]
  }),

  target: 'node', // !different

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
        use: [ 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']
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
  devtool: '#source-map',
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: resolve(clientpath, 'index.html')
    // }),

    // new CopyWebpackPlugin([
    //   { 
    //     from: resolve(clientpath, 'statics'),
    //     to: 'statics',
    //     ignore: [".gitkeep"]
    //   }
    // ]),

    // new ExtractTextPlugin("styles.css")

    new VueSSRServerPlugin()

  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),

    // new CleanWebpackPlugin([`${root('dist/client')}/**`], {root: root(), verbose: true}),

    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),

    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })

  ])
}
