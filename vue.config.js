module.exports = {
  lintOnSave: false,

  pluginOptions: {
    quasar: {
      theme: 'ios',
      rtlSupport: true,
      importAll: true
    },
    cordovaPath: 'src-cordova'
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ],

  publicPath: ''
}
