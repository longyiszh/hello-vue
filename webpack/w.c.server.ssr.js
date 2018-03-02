const { resolve } = require('path');

const merge = require('webpack-merge');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals')

const { root } = require('../lib/helpers');
const clientpath = root('src/client');
const baseconfig = require('./w.c.base');

let config = merge(baseconfig, {
  entry: {
    main: [
      resolve(clientpath, 'server-entry.ts')
    ]
  },
  
  output: {
    path: root('dist/client'),
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2'
  },

  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: [/\.css$/, /\.vue$/, /\.scss$/]
  }),

  target: 'node',

  plugins: [
    new VueSSRServerPlugin()
  ]
});

module.exports = config;
