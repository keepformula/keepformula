import Vue from 'vue'
Vue.filter('lowercase', function (value) {
  return value.toLowerCase()
})
Vue.filter('fixed', function (value) {
  return value.toFixed(2)
})
