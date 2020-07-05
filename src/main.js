import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import dateFilter from "@/filters/date.filter"

Vue.config.productionTip = false

Vue.use(vuelidate)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
