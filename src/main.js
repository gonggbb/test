import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/apiconfig'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
import echartsGL from 'echarts-gl'

import BaiduMap from 'vue-baidu-map'
// import VuevideoPlayer from 'vue-video-player';

// import 'video.js/dist/video-js.css';

// Vue.use(VuevideoPlayer);
Vue.use(BaiduMap, {
  ak: "Fo5NqABsiG6n9tZ1zQBEuHw6oOGiDPGF"
})
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
