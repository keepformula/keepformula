import Vue from 'vue'
Vue.filter('lowercase', function (value) {
  return value.toLowerCase()
})
