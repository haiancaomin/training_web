import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'
import SignUp from '@/page/SignUp'
// import Diagram from '@/page/Diagram'
// import Echarts from '@/page/Echarts'
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
import PersonalCenterPersonInfo from '@/page/personalCenter/PersonalCenterPersonInfo'
import PersonalCenterAllOrder from '@/page/personalCenter/PersonalCenterAllOrder'
import PersonalCenterUncompletedOrder from '@/page/personalCenter/PersonalCenterUncompletedOrder'
import PersonalCenterNotInvoice from '@/page/personalCenter/PersonalCenterNotInvoice'
import PersonalCenterHaveInvoice from '@/page/personalCenter/PersonalCenterHaveInvoice'
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
      path: 'PesronalScoreSearch',
      component: PesronalScoreSearch,
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
      children: [{
        path: '',
        redirect: 'overview',
      }, {
        path: 'overview',
        component: baseOverView,
      }, {
        path: 'show1',
        component: baseShow1,
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
        path: 'PersonalExpressSearch',
        component: PersonalExpressSearch,
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
      }, {
        path: 'PersonalCenterHaveInvoice',
        component: PersonalCenterHaveInvoice,
      }, {
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
    },
    {
      path: '/newsList',
      component: newsList
    }
    ]
  }]
})