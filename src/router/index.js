import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {//添加首页页面路由
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
