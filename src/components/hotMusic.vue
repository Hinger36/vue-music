<template>
  <div id="song">
    <div class="hot-banner">
    </div>
    <div class="box" v-for="song in this.$store.state.hotsong" :key="song.id">
      <div class="song-name">{{song.name}}</div>
      <p class="author">{{song.ar[0].name}}</p>
    </div>
  </div>
</template>

<script>
import { get } from '../api/api';

export default {
  mounted() {
    get('top/list?idx=1').then(res => {
      this.$store.commit('getHotsong', res.playlist.tracks)
    })
  },
}
</script>

<style scoped>
#song {
  display: flex;
  flex-wrap: wrap;
}
#song .hot-banner {
  flex: 0 0 100%;
  color: #333;
  font-size: 16px;
  text-indent: 5px;
  height: 180px;
  background: url('../assets/gfdgdfg.png') no-repeat;
  background-size: 100% 100%;
  margin: 70px 0 10px 0;
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


