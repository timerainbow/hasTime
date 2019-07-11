import Vue from 'vue'
import Router from 'vue-router'
import publish from '@/components/publish'
import content from '@/components/content'
import listArticle from '@/components/listArticle'
import login from '@/components/login'
import index from '@/components/index'
import backIndex from '@/components/backIndex'
import set from '@/components/set'
import articles from '@/components/allArticles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/backIndex',
      component: backIndex,
      children: [{
        path: '/publish',
        component: publish
      },
      {
        path: '/index',
        component: index
      },
      {
        path: '/set',
        component: set
      },
      {
        path: '/checkArticles',
        component: articles
      }]
    },
    {
      path: '/listArticle',
      name: 'listArticle',
      component: listArticle
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
