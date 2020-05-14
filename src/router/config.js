import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ArticleList from '@/views/articles'
import ArticleInfo from '@/views/articleInfo'

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
    },
    {
      path: '/articles',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/articles/:id',
      name: 'ArticleInfo',
      component: ArticleInfo
    }
  ]
})
