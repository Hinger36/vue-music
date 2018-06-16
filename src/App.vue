<template>
  <div id="app">
    <v-header></v-header>
    <!-- <v-index></v-index> -->
    <router-view></router-view>
    <!-- <playmusic></playmusic> -->
  </div>
</template>

<script>
import index from './components/index.vue';
import header from './components/header.vue';
import songlist from './components/songlist.vue';
import play from './components/playMusic.vue';

export default {
 
  components: {
    'v-index': index,
    'v-header': header,
    'songlist': songlist,
    'playmusic': play
  },
  data () {
    return {
     
    }
  }
}
</script>

