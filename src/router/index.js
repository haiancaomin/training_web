import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'
import Index from '@/page/Index'
import SignUp from '@/page/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/UserLogin',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/UserRegister',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
