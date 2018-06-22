<template>
  <div id="song">
    <div class="hot-banner">
      <img :src="img">
    </div>
    <div class="container-list">
      <div class="box" v-for="song in this.$store.state.hotsong.tracks" :key="song.id" @click="playMusic(song.id, song.al.picUrl)">
        <div class="song-name">{{song.name}}</div>
        <p class="author">{{song.ar[0].name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../api/api';

export default {
  mounted() {
    get('top/list?idx=1').then(res => {
      this.$store.commit('getHotsong', res.playlist)
    })
  },
  methods: {
    playMusic(id, img) {
      get(`/music/url?id=${id}`).then(res => {
        this.$store.commit('playSong', {data:res.data[0], Img:img})
      })
      // this.$router.push({ path:`/play` });
    }
  },
  computed: {
    img() {
      return this.$store.state.hotsong.cover;
    }

  },
}
</script>

<style scoped>
#song {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 55px;
}
#song .hot-banner {
  flex: 0 0 100%;
  color: #333;
  font-size: 16px;
  height: 320px;
  background-size: 100% 100%;
  margin: 0 0 10px 0;
}
#song .hot-banner img {
  width: 100%;
  z-index: -1;
}
.container-list {
  flex: 0 0 100%;
  background-color: #fafafa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.box {
  flex: 0 0 100%;
  padding: 0 10px;
  border-bottom: 1px solid #ddd;
  background: url('../assets/play.png') no-repeat;
  background-size: 26px;
  background-position: right 10px center;
}
.song-name {
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  height: 26px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26px;
}
.song-name span {
  color: #888;
  
}
.author {
  font-size: 12px;
  width: 70%;
  overflow: hidden;
  color: #888;
  padding-bottom: 5px;
}



</style scoped>


