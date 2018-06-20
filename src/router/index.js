import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: App.components['v-index'],
    // children: [
    //   {
    //     path: 'sheet',
    //     name: 'sheet',
    //     component: App.components.songSheet
    //   }
    // ]
    
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
  {
    path: '/hotsong',
    name: 'hot',
    component: App.components['hot-music']
    
  },
  {
    path: '/sheet',
    name: 'sheet',
    component: App.components.songSheet
  }

]

export default new VueRouter({
  routes,
  // linkActiveClass: "active",
})