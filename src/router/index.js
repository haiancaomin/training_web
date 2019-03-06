import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'
import SignUp from '@/page/SignUp'
import courseList from '@/page/course/courseList'
import teacherList from '@/page/teacher/teacherList'
import fileList from '@/page/downloads/fileList'
import fileDetail from '@/page/downloads/fileDetail'
import Inspection from '@/page/inspection/Inspection'
import InspectionDetail from '@/page/inspection/InspectionDetail'
import contactUs from '@/page/contactUs'

import Test from '@/page/Test'

import baseShow from '@/page/base/baseShow'



Vue.use(Router)

export default new Router({
  routes: [{
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
      },
      {
        path: '/Test',
        name: 'Test',
        component: Test
      },
      {
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
      }, {
        path: '/base',
        component: baseShow
      }, {
        path: '/Inspection',
        component: Inspection
      },{
        path: '/InspectionDetail',
        component: InspectionDetail
      },{
        path: '/contact',
        component: contactUs
      }
    ]
  }]
})