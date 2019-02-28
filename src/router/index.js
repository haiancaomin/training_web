import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav'
import Index from '@/page/Index'
import courseList from '@/page/course/courseList'
import teacherList from '@/page/teacher/teacherList'
import fileList from '@/page/downloads/fileList'

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
    }, {
      path: '/course',
      component: courseList
    }, {
      path: '/teacher',
      component: teacherList
    }, {
      path: '/download',
      component: fileList
    }, ]
  }]
})