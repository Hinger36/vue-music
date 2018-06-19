import Vue from 'vue'
import App from './App.vue'
import 'iview/dist/styles/iview.css';
import iView from 'iview';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(iView);
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
