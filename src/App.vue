<template>
  <div id="app">
    <v-header v-if="this.$router.history.current.query.isNative !== 1"></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <playmusic></playmusic>
  </div>
</template>

<script>
import index from './components/index.vue';
import header from './components/header.vue';
import songlist from './components/songlist.vue';
import play from './components/playMusic.vue';
import hotMusic from './components/hotMusic.vue';
import songSheet from './components/songSheet.vue';


export default {
  components: {
    'v-index': index,
    'v-header': header,
    'songlist': songlist,
    'playmusic': play,
    'hot-music': hotMusic,
    'songSheet': songSheet
  },
  mounted() {
    let m = document.querySelector('#app')
    m.addEventListener('touchend', this.firstPlay)
  },
  methods: {
    firstPlay () {
      let music = document.querySelector('#music-audio')
      music.play()
      if (music.src !== '') {
        this.stop = true
      }
    }
  },
  watch: {
    stop () {
      let m = document.querySelector('#app')
      m.removeEventListener('touchend', this.firstPlay)
    }
  }
}
</script>

