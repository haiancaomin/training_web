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
import PersonalCenter from '@/page/personalCenter/PersonalCenter'
import PesronalScoreSearch from '@/page/personalCenter/PesronalScoreSearch'
import PersonalExpressSearch from '@/page/personalCenter/PersonalExpressSearch'
import PersonalInvoice from '@/page/personalCenter/PersonalInvoice'
import PersonalCenterInvoiceShow from '@/page/personalCenter/PersonalCenterInvoiceShow'
import PersonalPassword from '@/page/personalCenter/PersonalPassword'
import PersonalMail from '@/page/personalCenter/PersonalMail'
import PersonalCenterAddPerson from '@/page/personalCenter/PersonalCenterAddPerson'
import HRServiceTypeChoice from '@/page/HRService/HRServiceTypeChoice'
import HRServiceJobSeekerIndex from '@/page/HRService/HRServiceJobSeekerIndex'
import HRServiceHRIndex from '@/page/HRService/HRServiceHRIndex'
import HRServiceJobSeekerResume from '@/page/HRService/HRServiceJobSeekerResume'
import HRServiceJobSeekerResumeInfo from '@/page/HRService/HRServiceJobSeekerResumeInfo'

import Test from '@/page/Test'

import baseMenu from '@/page/base/baseMenu'
import baseOverView from '@/page/base/baseOverView'
import baseShow1 from '@/page/base/baseShow1'



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
        component: baseMenu,
        children:[{
          path:'',
          redirect: 'overview',
        },{
          path:'overview',
          component: baseOverView,
        },{
          path:'show1',
          component: baseShow1,
        }]
      }, {
        path: '/Inspection',
        component: Inspection
      }, {
        path: '/InspectionDetail',
        component: InspectionDetail
      }, {
        path: '/contact',
        component: contactUs
      }, {
        path: '/PersonalCenter',
        component: PersonalCenter
      }, {
        path: '/PesronalScoreSearch',
        component: PesronalScoreSearch
      }, {
        path: '/PersonalExpressSearch',
        component: PersonalExpressSearch
      }, {
        path: '/PersonalInvoice',
        component: PersonalInvoice
      }, {
        path: '/PersonalPassword',
        component: PersonalPassword
      }, {
        path: '/PersonalMail',
        component: PersonalMail
      }, {
        path: '/HRServiceTypeChoice',
        component: HRServiceTypeChoice
      }, {
        path: '/HRServiceJobSeekerIndex',
        component: HRServiceJobSeekerIndex
      }, {
        path: '/HRServiceHRIndex',
        component: HRServiceHRIndex
      }, {
        path: '/HRServiceJobSeekerResume',
        component: HRServiceJobSeekerResume
      }, {
        path: '/HRServiceJobSeekerResumeInfo',
        component: HRServiceJobSeekerResumeInfo
      }, {
        path: '/PersonalCenterAddPerson',
        component: PersonalCenterAddPerson
      }, {
        path: '/PersonalCenterInvoiceShow',
        component: PersonalCenterInvoiceShow
      }
    ]
  }]
})