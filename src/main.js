import Vue from 'vue'
import App from './App.vue'

// 导入router
import router from './router/router.js'

// // 导入bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

//导入vue-meta
import Meta from 'vue-meta'
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
