import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'

import SignUp from '@/page/SignUp'

import courseList from '@/page/course/courseList'
import teacherList from '@/page/teacher/teacherList'
import fileList from '@/page/downloads/fileList'
import fileDetail from '@/page/downloads/fileDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TopNav,
      children: [{
        path: '',
        redirect: '/index'
      }, {
        path: '/index',
        component: Index
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
      }, {
        path: '/course',
        component: courseList
      }, {
        path: '/teacher',
        component: teacherList
      }, {
        path: '/download',
        component: fileList
      }, {
        path: '/download-action',
        component: fileDetail
      },]
    }]
})

