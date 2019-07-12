import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    component: resolve => require(['@/components/TopNav'], resolve),
    children: [{
        path: '',
        redirect: '/index'
      }, {
        path: '/index',
        component: resolve => require(['@/page/Index'], resolve)
      }, {
        path: '/test',
        component: resolve => require(['@/page/test'], resolve)
      },
      {
        path: '/Forget',
        component: resolve => require(['@/components/Forget'], resolve)
      },
      {
        path: '/paysuccess',
        component: resolve => require(['@/components/paySuccess'], resolve)
      },
      {
        path: 'PersonalCenterOrderDetail/:orderid',
        component: resolve => require(['@/page/personalCenter/PersonalCenterOrderDetail'], resolve),
        props: true
      },
      {
        path: 'InspectionDetail/:eid',
        component: resolve => require(['@/page/inspection/InspectionDetail'], resolve),
        props: true
      },
      {
        path: '/SignUp',
        component: resolve => require(['@/page/signUp/SignUp'], resolve),
        meta: {
          auth: true
        }
      },
      {
        path: '/PesronalScoreSearch',
        component: resolve => require(['@/page/personalCenter/PesronalScoreSearch'], resolve)
      },
      {
        path: '/CompanySignUp',
        name: 'CompanySignUp',
        component: resolve => require(['@/page/signUp/CompanySignUp'], resolve)
      },
      {
        path: '/SchoolSignUp',
        name: 'SchoolSignUp',
        component: resolve => require(['@/page/signUp/SchoolSignUp'], resolve)
      },
      {
        path: '/PersonalSignUp',
        name: 'PersonalSignUp',
        component: resolve => require(['@/page/signUp/PersonalSignUp'], resolve)
      },
      {
        path: '/TeamSignUp',
        name: 'TeamSignUp',
        component: resolve => require(['@/page/signUp/TeamSignUp'], resolve)
      },
      {
        path: '/Accounts',
        name: 'Accounts',
        component: resolve => require(['@/page/signUp/Accounts'], resolve)
      }, {
        path: '/SignUpPay',
        name: 'SignUpPay',
        component: resolve => require(['@/page/signUp/SignUpPay'], resolve)
      },
      {
        path: '/SignUpSuccess',
        name: 'SignUpSuccess',
        component: resolve => require(['@/page/signUp/SignUpSuccess'], resolve)
      },
      {
        path: '/SignUpPageWait',
        name: 'SignUpPageWait',
        component: resolve => require(['@/page/signUp/SignUpPageWait'], resolve)
      },
      {
        path: '/course',
        component: resolve => require(['@/page/course/courseList'], resolve)
      }, {
        path: '/download',
        component: resolve => require(['@/page/downloads/fileList'], resolve)
      }, {
        path: '/base',
        component: resolve => require(['@/page/base/baseMenu'], resolve),
        children: [{
          path: 'overview/:id',
          component: resolve => require(['@/page/base/baseOverView'], resolve),
          props: true
        }, {
          path: 'show1/:id',
          component: resolve => require(['@/page/base/baseShow1'], resolve),
          props: true
        }]
      }, {
        path: '/PersonalCenter',
        component: resolve => require(['@/page/personalCenter/PersonalCenter'], resolve),
        meta: {
          auth: true
        },
        children: [{
            path: 'PersonalCenterAddPerson',
            component: resolve => require(['@/page/personalCenter/PersonalCenterAddPerson'], resolve)
          }, {
            path: 'PersonalCenterPersonInfo',
            component: resolve => require(['@/page/personalCenter/PersonalCenterPersonInfo'], resolve)
          }, {
            path: 'PersonalCenterInvoiceShow',
            component: resolve => require(['@/page/personalCenter/PersonalCenterInvoiceShow'], resolve)
          }, {
            path: 'PersonalPassword',
            component: resolve => require(['@/page/personalCenter/PersonalPassword'], resolve)
          }, {
            path: 'PersonalCenterAllOrder',
            component: resolve => require(['@/page/personalCenter/PersonalCenterAllOrder'], resolve)
          }, {
            path: 'PersonalCenterUncompletedOrder',
            component: resolve => require(['@/page/personalCenter/PersonalCenterUncompletedOrder'], resolve)
          }, {
            path: 'PersonalCenterNotInvoice',
            component: resolve => require(['@/page/personalCenter/PersonalCenterNotInvoice'], resolve)
          },
          {
            path: 'PersonalCenterAuthentication',
            component: resolve => require(['@/page/personalCenter/PersonalCenterAuthentication'], resolve)
          }, {
            path: 'PersonalCenterCertificate',
            component: resolve => require(['@/page/personalCenter/PersonalCenterCertificate'], resolve)
          }, {
            path: 'PersonalCenterjieye',
            component: resolve => require(['@/page/personalCenter/PersonalCenterjieye'], resolve)
          }, {
            path: 'PersonalCenterChangeMobile',
            component: resolve => require(['@/page/personalCenter/PersonalCenterChangeMobile'], resolve)
          }
        ]
      }, {
        path: '/Inspection',
        component: resolve => require(['@/page/inspection/Inspection'], resolve)
      },
      {
        path: '/MessageBoard',
        component: resolve => require(['@/page/MessageBoard/MessageBoard'], resolve),
        meta: {
          auth: true
        }
      },
      {
        path: '/newsList',
        component: resolve => require(['@/page/news/newsList'], resolve)
      },
      {
        path: '/newsDetail/:id',
        component: resolve => require(['@/page/news/newsDetail'], resolve),
        props: true
      }
    ]
  }]
})