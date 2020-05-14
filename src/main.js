import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from '@/router/config'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090/api'
Vue.prototype.$axios= axios
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  components: { App },
  template: '<App/>'
})