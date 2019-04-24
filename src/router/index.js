import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'
import SignUp from '@/page/signUp/SignUp'
import CompanySignUp from '@/page/signUp/CompanySignUp'
import SchoolSignUp from '@/page/signUp/SchoolSignUp'
import PersonalSignUp from '@/page/signUp/PersonalSignUp'
import Accounts from '@/page/signUp/Accounts'
import SignUpPay from '@/page/signUp/SignUpPay'
import SignUpSuccess from '@/page/signUp/SignUpSuccess'
import SignUpPageWait from '@/page/signUp/SignUpPageWait'

import courseList from '@/page/course/courseList'
import teacherList from '@/page/teacher/teacherList'
import fileList from '@/page/downloads/fileList'
import fileDetail from '@/page/downloads/fileDetail'
import Inspection from '@/page/inspection/Inspection'
import InspectionDetail from '@/page/inspection/InspectionDetail'
import contactUs from '@/page/contactUs'
import PersonalCenter from '@/page/personalCenter/PersonalCenter'

import PersonalCenterInvoiceShow from '@/page/personalCenter/PersonalCenterInvoiceShow'
import PersonalPassword from '@/page/personalCenter/PersonalPassword'

import PersonalCenterAddPerson from '@/page/personalCenter/PersonalCenterAddPerson'
import PersonalCenterPersonInfo from '@/page/personalCenter/PersonalCenterPersonInfo'
import PersonalCenterAllOrder from '@/page/personalCenter/PersonalCenterAllOrder'
import PersonalCenterUncompletedOrder from '@/page/personalCenter/PersonalCenterUncompletedOrder'
import PersonalCenterNotInvoice from '@/page/personalCenter/PersonalCenterNotInvoice'
import PersonalCenterAuthentication from '@/page/personalCenter/PersonalCenterAuthentication'
import PersonalCenterReport from '@/page/personalCenter/PersonalCenterReport'
import PersonalCenterCertificate from '@/page/personalCenter/PersonalCenterCertificate'
import PersonalCenterChangeMobile from '@/page/personalCenter/PersonalCenterChangeMobile'
import HRServiceTypeChoice from '@/page/HRService/HRServiceTypeChoice'
import HRServiceJobSeekerIndex from '@/page/HRService/HRServiceJobSeekerIndex'
import HRServiceHRIndex from '@/page/HRService/HRServiceHRIndex'
import HRServiceJobSeekerResume from '@/page/HRService/HRServiceJobSeekerResume'
import HRServiceJobSeekerResumeInfo from '@/page/HRService/HRServiceJobSeekerResumeInfo'

import baseMenu from '@/page/base/baseMenu'
import baseOverView from '@/page/base/baseOverView'
import baseShow1 from '@/page/base/baseShow1'
import newsList from '@/page/news/newsList'



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
      path: '/CompanySignUp',
      name: 'CompanySignUp',
      component: CompanySignUp
    },
    {
      path: '/SchoolSignUp',
      name: 'SchoolSignUp',
      component: SchoolSignUp
    },
    {
      path: '/PersonalSignUp',
      name: 'PersonalSignUp',
      component: PersonalSignUp
    },
    {
      path: '/Accounts',
      name: 'Accounts',
      component: Accounts
    },{
      path: '/SignUpPay',
      name: 'SignUpPay',
      component: SignUpPay
    },
    {
      path: '/SignUpSuccess',
      name: 'SignUpSuccess',
      component: SignUpSuccess
    },
    {
      path: '/SignUpPageWait',
      name: 'SignUpPageWait',
      component: SignUpPageWait
    },
    // {
    //   path: '/Diagram',
    //   name: 'Diagram',
    //   component: Diagram
    // },
    // {
    //   path: '/Echarts',
    //   name: 'Echarts',
    //   component: Echarts
    // },
   
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
      children: [{
        path: '',
        redirect: 'overview/sxjd',
      }, {
        path: 'overview/:id',
        component: baseOverView,
        props: true
      }, {
        path: 'show1/:id',
        component: baseShow1,
        props: true
      }]
    }, {
      path: '/PersonalCenter',
      component: PersonalCenter,
      children: [{
        path: '',
        redirect: '/personalCenter/PersonalCenterAllOrder',
      }, {
        path: 'PersonalCenterAddPerson',
        component: PersonalCenterAddPerson,
      }, {
        path: 'PersonalCenterPersonInfo',
        component: PersonalCenterPersonInfo,
      }, {
        path: 'PersonalCenterInvoiceShow',
        component: PersonalCenterInvoiceShow,
      }, {
        path: 'PersonalPassword',
        component: PersonalPassword,
      }, {
        path: 'PersonalCenterAllOrder',
        component: PersonalCenterAllOrder,
      }, {
        path: 'PersonalCenterUncompletedOrder',
        component: PersonalCenterUncompletedOrder,
      }, {
        path: 'PersonalCenterNotInvoice',
        component: PersonalCenterNotInvoice,
      }, 
       {
        path: 'PersonalCenterAuthentication',
        component: PersonalCenterAuthentication,
      }, {
        path: 'PersonalCenterReport',
        component: PersonalCenterReport,
      }, {
        path: 'PersonalCenterCertificate',
        component: PersonalCenterCertificate,
      }, {
        path: 'PersonalCenterChangeMobile',
        component: PersonalCenterChangeMobile,
      }]
    }
      , {
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
    }, 
    {
      path: '/PersonalPassword',
      component: PersonalPassword
    },{
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
    },
    {
      path: '/newsList',
      component: newsList
    }
    ]
  }]
})