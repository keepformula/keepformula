module.exports = {
  lintOnSave: false,

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.example.app',
        mac: {
          'icon': 'build/icons/icon.icns'
        },
        win: {
          icon: 'build/icons/icon.ico'
        },
        linux: {
          'icon': 'build/icons'
        },
        snap: {},
        apk: {}
      }
    },
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
