import Vue from 'vue'
import Widgets from '@/widgets'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import WidgetLayout from './layouts/Widgets.vue'
import Home from './views/Home.vue'
Vue.use(Router)

let widgets = []
Widgets.forEach((item) => {
  widgets.push({
    path: `/${item.route}`,
    name: `${item.route}`,
    component: () => import(`@/components/${item.route}`) ,
    meta: item
  })
})

let routes = [
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
          path: '/widget',
          name: 'widget',
          component: WidgetLayout,
          children: widgets,
        },
      ]
    }
]

export default new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (window.location.pathname !== 'home') {
      return { x: 0, y: 0 }
    }
  }
})
