import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/apiconfig'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
import echartsGL from 'echarts-gl'
Vue.prototype.$echartsGL = echartsGL
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
