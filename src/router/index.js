import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import AddUsers from '@/components/AddUsers'
import CusDetails from '@/components/cusDetails'


import Customers from '@/components/Customers'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'customers',
      component:Customers
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/addUsers',
      name:'addUsers',
      component:AddUsers
    },
    {
      path:'/cusDetails/:id',
      name:'cusDetails',
      component:CusDetails
    }
  ]
})
