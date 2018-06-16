import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    // redirect: '/index',
    component: App.components['v-index'],
  },
  {
    path: '/song',
    name: 'songlist',
    component: App.components.songlist
    
  },
  {
    path: '/play',
    name: 'play',
    component: App.components.playmusic
    
  },
]

export default new VueRouter({
  routes
})