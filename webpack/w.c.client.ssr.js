const merge = require('webpack-merge');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const { root } = require('../lib/helpers');

const baseconfig = require('./w.c.client.base');

let config = merge(baseconfig, {
  
  output: {
    path: root('dist/client'),
    filename: 'bundle.client.js'
  },

  plugins: [
    new VueSSRClientPlugin()
  ]
});

module.exports = config;


