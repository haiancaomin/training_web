import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'
<<<<<<< HEAD
import SignUp from '@/page/SignUp'
=======
import courseList from '@/page/course/courseList'
import teacherList from '@/page/teacher/teacherList'
import fileList from '@/page/downloads/fileList'
import fileDetail from '@/page/downloads/fileDetail'
>>>>>>> 172bad7f4b78bc55579827b53c62446a3674ea86

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
  routes: [{
    path: '/',
    component: TopNav,
    children: [{
      path: '',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
<<<<<<< HEAD
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
=======
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
    }, ]
  }]
})
>>>>>>> 172bad7f4b78bc55579827b53c62446a3674ea86
