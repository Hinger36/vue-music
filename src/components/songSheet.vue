<template>
  <div id="song">
    <div class="hot-banner">
      <div class="back" @click="back">返回</div>
      <div class="mh"><img :src="img"></div>
      <span>{{title}}</span>
    </div>
    <div class="container-list">
      <div class="box" v-for="data in this.$store.state.musicsheet.data" :key="data.id" @click="playMusic(data.id, data.al.picUrl)">
        <div class="song-name">{{data.name}}</div>
        <p class="author">{{data.ar[0].name}}</p>
      </div>
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
  // created() {
  //    let foo = this.$router.history.current.query;
  //     console.log(foo)
  // },
  computed: {
    img() {
      return this.$store.state.musicsheet.Img;
    },
    title() {
      return this.$store.state.musicsheet.name;
    }
  },
  methods: {
    playMusic(id, img) {
      get(`/music/url?id=${id}`).then(res => {
        this.$store.commit('playSong', {data:res.data[0], Img:img})
      })
      // this.$router.push({ path:`/play` });
    },
    back() {
      this.$router.go(-1);
    }
  }
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
  position: relative;
  
}
/* .mh {
  filter: blur(3px);
} */
.back {
  position: absolute;
  padding: 8px 20px;
  color: #fafafa;
  font-weight: bold;
  z-index: 1000;
}
#song .hot-banner img {
  width: 100%;
  
}
#song .hot-banner::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .2);
  
}
#song .hot-banner span {
  position: absolute;
  color: #fafafa;
  font-weight: bold;
  font-size: 16px;
  left: 10px;
  z-index: 1000;
  bottom: 0;
  padding: 5px 10px
}
.container-list {
  flex: 0 0 100%;
  background-color: #fafafa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 1000;
}
.box {
  /* flex: 0 0 100%; */
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


