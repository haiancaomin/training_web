// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import axios from 'axios' //引入axios
import 'babel-polyfill'

Vue.prototype.bus = new Vue()
Vue.prototype.$ajax = axios
Vue.prototype.baseURL = process.env.API_ROOT
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.sessionStorage.user != undefined) {
      next()
    } else if (to.path == '/SignUp' || to.path == '/PersonalCenter') {
     
      next(false)
      sessionStorage.setItem('redirect',to.fullPath)
      document.getElementById('loginBtn').click()
      Vue.prototype.$message({
        message: '检测到您还未登录,请登录后操作！',
        type: 'error',
        center: true,
        customClass: 'zZindex'
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})