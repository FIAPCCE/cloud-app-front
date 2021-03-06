// Vue Dep
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// APP Dep

// Css's
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/sass/style.scss'

// Js's
import '@/assets/js/scripts'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
