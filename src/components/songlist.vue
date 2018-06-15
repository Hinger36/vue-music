<template>
  <div id="song">
    <div class="title">推荐歌曲</div>
    <div class="box" v-for="song in this.$store.state.newsong" :key="song.id">
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
  }
}
</script>

<style scoped>
#song .title {
  
  color: #333;
  font-size: 16px;
  text-indent: 5px;
  height: 21px;
  margin: 50px 0 10px 0;
  border-left: 5px solid #db4c3f;
}
.box {
  margin: 0 10px;
  border-bottom: 1px solid #ddd;
}
.song-name {
  font-size: 16px;
  color: #333;
  height: 26px;
  width: 75%;
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
  color: #888;
  padding-bottom: 5px;
}



</style scoped>
 