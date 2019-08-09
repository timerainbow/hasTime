import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import editor from 'wangeditor'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/* eslint-disable no-new */
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
