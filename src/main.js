import Vue from 'vue'
import App from './App.vue'

// 导入router
import router from './router/router.js'

// // 导入bootstrap.js
import 'bootstrap/dist/js/bootstrap.js'

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
