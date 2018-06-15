<template>
  <div id="imglist">
    <div class="title">推荐歌单</div>
    <div class="box" v-for="data in this.$store.state.data" :key="data.id">
      <div class="imginfo">
        <img :src="data.picUrl" alt="#" width="120px" style="border-radius:4px;">
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
  margin: 50px 0 10px 0;
  border-left: 5px solid #db4c3f;
}
#imglist .box {
  box-sizing: border-box;
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  padding: 0;
}
.imginfo {
  padding: 5px 0;
  align-self: center;
}
.decs {
  width: 120px;
  height: 35px;
  color: #333;
  overflow: hidden;
}
</style scoped>

