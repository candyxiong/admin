import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Customers from '@/components/Customers'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'Customers',
      component:Customers
    },
    {
      path:'/About',
      name:'About',
      component:About
    }
  ]
})
