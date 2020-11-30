import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './stores/index.js'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/* axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(
  res=>console.log(res)
) */