import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyInput from '@/components/myinput'
import Table from '@/components/table/table'
import Myapp from '@/components/mytext/myapp'
import mytext from '@/components/mytext/mytext'
import mytext2 from '@/components/mytext/mytext2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myinput',
      name: 'MyInput',
      component: MyInput
    },

    {
      path: '/table/:name/:sex',
      name: 'table',
      component: Table
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: Myapp,
      children:[   //子路由规则，这样才能使路由有上下级关系，展示不冲突
        {
             //注意，子路由path前面不需要加斜线，表示路径会拼上上级路由的路径
            path:'text2',component:mytext2  
        },{
            
            path:'text',component:mytext   
        }
    ]  
    },
  ]
})
