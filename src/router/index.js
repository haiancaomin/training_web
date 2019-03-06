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
<<<<<<< HEAD
import contactUs from '@/page/contactUs'
=======
import PersonalCenter from '@/page/personalCenter/PersonalCenter'
import PesronalScoreSearch from '@/page/personalCenter/PesronalScoreSearch'
import PersonalExpressSearch from '@/page/personalCenter/PersonalExpressSearch'
import PersonalInvoice from '@/page/personalCenter/PersonalInvoice'
import PersonalPassword from '@/page/personalCenter/PersonalPassword'
import PersonalMail from '@/page/personalCenter/PersonalMail'
>>>>>>> 878e8117d0d4ce3e870e1154511eee76abf42739

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
<<<<<<< HEAD
        path: '/contact',
        component: contactUs
=======
        path: '/PersonalCenter',
        component: PersonalCenter
      },{
        path: '/PesronalScoreSearch',
        component: PesronalScoreSearch
      },{
        path: '/PersonalExpressSearch',
        component: PersonalExpressSearch
      },{
        path: '/PersonalInvoice',
        component: PersonalInvoice
      },{
        path: '/PersonalPassword',
        component: PersonalPassword
      },{
        path: '/PersonalMail',
        component: PersonalMail
>>>>>>> 878e8117d0d4ce3e870e1154511eee76abf42739
      }
    ]
  }]
})