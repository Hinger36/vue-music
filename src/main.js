import Vue from 'vue'
import App from './App.vue'
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import store from './store'
import router from './router'

Vue.use(iView);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
