import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/table/table'
import Myapp from '@/components/mytext/myapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table/:name/:sex',
      name: 'table',
      component: Table
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: Myapp
    },
  ]
})
