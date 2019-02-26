import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import courseList from '@/page/course/courseList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/course',
      component: courseList
    },

  ]
})
