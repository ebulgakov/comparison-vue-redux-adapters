const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

environment.loaders.append('vue', {
  test: /\.vue$/,
  use: [{
    loader: 'vue-loader'
  }]
})

environment.plugins.insert('vuePlugin', new VueLoaderPlugin())

module.exports = environment
