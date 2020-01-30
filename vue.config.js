const webpack = require('webpack')
const version = require('./package.json').version
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/keepformula-webui/demo/'
    : '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
          })
        ]
      }
    } else {
      return {
        plugins: [
          new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
          })
        ]
      }
    }
  },
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
  ]
}
