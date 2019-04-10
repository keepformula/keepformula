module.exports = {
  lintOnSave: false,

  pluginOptions: {
    quasar: {
      theme: 'ios',
      rtlSupport: true,
      importAll: true
    }
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ]
}
