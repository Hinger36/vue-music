<template>
  <div id="imglist">
    <div class="title">推荐歌单</div>
    <div class="box" v-for="data in this.$store.state.data" :key="data.id" @click="musicList(data.id, data.picUrl, data.name)">
      <div class="imginfo">
        <img :src="data.picUrl" alt="#">
        <div class="caption">
          <p class="decs" style="text-align:center">{{ data.name }}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { get } from '../api/api';

export default {
  mounted() {
    get('personalized?limit=6').then(res => {
      this.$store.commit('getData', res.result)
    })
    
  },
  methods: {
    musicList(id, img, name) {
      get(`/playlist/detail?id=${id}`).then(res => {
        this.$store.commit('getMusicsheet', {data: res.playlist.tracks, Img: img, name: name})
      })
      this.$router.push({ path:`/sheet`, query:{isNative: 1}});
    }
  }
  
}
</script>

<style scoped>
#imglist {
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
}
#imglist .title {
  flex: 0 0 100%;
  color: #333;
  font-size: 18px;
  text-indent: 5px;
  height: 24px;
  margin: 85px 0 10px 0;
  border-left: 5px solid #42b983;
}
#imglist .box {
  box-sizing: border-box;
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  padding: 0;
}
.imginfo {
  padding: 4px;
  align-self: center;
}
.imginfo img{
  border-radius: 4px;
  width: 100%;
}
.decs {
  width: 100%;
  height: 35px;
  color: #333;
  overflow: hidden;
}
</style scoped>

