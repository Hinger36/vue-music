<template>
  <div class="option" v-show="this.$store.state.playshow">
    <div class="cover"><img :src='img'></div>
    <div class="Audio">
      <audio id="music-audio" ref="mmAudio" :src="src" autoplay></audio>
      <el-button @click="play">暂停/播放</el-button>
    </div>
  </div>


</template>

<script>
export default {
 
  computed: {
    src() {
      return this.$store.state.playsong.data.url;
    },
    img() {
      return this.$store.state.playsong.Img;
    }
  },
  methods: {
  
    play() {//暂停/播放
      this.$refs.mmAudio.paused ? this.$refs.mmAudio.play() : this.$refs.mmAudio.pause()
    },
  
  }
}
</script>

<style scoped>
.option {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, .9);
  z-index: 9999;
}
.cover {
  display: inline-block;
}
.cover img {
  padding: 5px;
  width: 50px;
  
}
.Audio {
  float: right;
  padding-top: 3px;
}

</style scoped>

