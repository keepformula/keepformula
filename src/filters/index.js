import Vue from 'vue'
Vue.filter('lowercase', function (value) {
  return value.toLowerCase()
})
Vue.filter('int', function (value) {
  return parseInt(value)
})
