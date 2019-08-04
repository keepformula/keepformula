import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import GoldenRatio from './components/GoldenRatio.vue'
import BMI from './components/BMI.vue'
import BaseConverter from './components/BaseConverter.vue'
import DataStorageConverter from './components/DataStorageConverter.vue'
import LengthConverter from './components/LengthConverter.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/Golden.Ratio',
          name: 'Golden Ratio',
          component: GoldenRatio
        },
        {
          path: '/BMI',
          name: 'BMI',
          component: BMI
        },
        {
          path: '/Base.Converter',
          name: 'Base Converter',
          component: BaseConverter
        },
        {
          path: 'Data.Storage.Converter',
          name: 'Data Storage Converter',
          component: DataStorageConverter
        },
        {
          path: '/Length.Converter',
          name: 'Length Converter',
          component: LengthConverter
        }
      ]
    }
  ]
})
