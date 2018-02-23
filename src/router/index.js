import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserHome from '@/components/UserHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/home',
      name: 'UserHome',
      component: UserHome
    }
  ]
})
