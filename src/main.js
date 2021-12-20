import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './permission'
import * as dayjs from 'dayjs'
import hls from 'videojs-contrib-hls'
import VideoPlayer from 'vue-video-player';
import "video.js/dist/video-js.css"
import "vue-video-player/src/custom-theme.css"
import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';

Vue.config.productionTip = false

Vue.use(hls)
Vue.use(VideoPlayer)
Vue.use(VueDPlayer);
Vue.use(ElementUI, { size: 'small' })
Object.defineProperty(Vue.prototype, '$dayjs', { value: dayjs })

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
