import Vue from 'vue'
import App from './App.vue'
import './mock/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.use(ElementUI)
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
