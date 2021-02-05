import Vue from 'vue'
import App from './App.vue'

import activityAPIService from '@/services/activityServices'

Vue.config.productionTip = false

Vue.prototype.$activity_api = activityAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
