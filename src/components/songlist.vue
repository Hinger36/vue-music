<template>
  <div id="song">
    <div class="title">推荐歌曲</div>
    <div class="box" v-for="song in this.$store.state.newsong" :key="song.id" @click="playMusic(song.id, song.song.album.picUrl)">
      <div class="song-name">{{song.name}}<span>&nbsp&nbsp{{ song.song.album.alias[0] }}</span></div>
      <p class="author">{{song.song.artists[0].name}}</p>
    </div>
  </div>
    
 
</template>

<script>
import { get } from '../api/api';

export default {
  
  mounted() {
    get('personalized/newsong').then(res => {
      this.$store.commit('getNewsong', res.result)
    })
  },
  methods: {
    playMusic(id, img) {
      get(`/music/url?id=${id}`).then(res => {
        this.$store.commit('playSong', {data:res.data[0], Img:img})
      })
      this.$router.push({ path:`/play` });
    }
  }
}
</script>

<style scoped>
#song {
  display: flex;
  flex-wrap: wrap;
}
#song .title {
  flex: 0 0 100%;
  color: #333;
  font-size: 16px;
  text-indent: 5px;
  height: 21px;
  margin: 30px 0 10px 0;
  border-left: 5px solid #42b983;
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
 