import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './permission'
import * as dayjs from 'dayjs'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
Object.defineProperty(Vue.prototype, '$dayjs', { value: dayjs })

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
