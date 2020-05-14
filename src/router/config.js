import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Home from '@/views/home'

let Home = () => import('@/views/home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    }
  ]
})
