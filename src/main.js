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

Vue.prototype.$ajax=axios
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
