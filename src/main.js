// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import iView from 'iview'

import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(iView)
Vue.use(VueAwesomeSwiper)

// iView.Message.config({
//   top: 300,
//   duration: 0.5
// })
// 公共组件
// import { Button} from 'iview';
// import { Affix } from 'iview';
// import { Input,Message} from 'iview';


// Vue.component('Button', Button);
// Vue.component('Affix', Affix);
// Vue.component('Form', Form);
// Vue.component('FormItem', FormItem);
// Vue.component('Input', Input);
// Vue.component('Message', Message);



Vue.prototype.axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
