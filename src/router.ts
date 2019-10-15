import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Activities',
      component: Homepage
    }
  ]
})
