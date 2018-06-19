<template>
  <div class="option">
    <div class="cover"></div>
    <div class="Audio">
      <audio id="audioTag" ref="mmAudio" :src='src' ></audio>
      <el-button @click="prev">上一曲</el-button>
      <el-button @click="play">暂停/播放</el-button>
      <el-button @click="next">下一曲</el-button>
    </div>
  </div>


</template>

<script>
export default {
  data: function () {
    return {
      list: [
        'https://music.163.com/song/media/outer/url?id=450424527.mp3',
        'https://music.163.com/song/media/outer/url?id=557581284.mp3',
        'https://music.163.com/song/media/outer/url?id=452986458.mp3'
      ],//歌曲数组
      index: 0,//当前歌曲下标
    }
  },
  computed: {
    src() {
      return this.list[this.index]
    }
  },
  methods: {
    prev() {//上一曲
      let index = this.index - 1;
      if (index < 0) {
        index = this.list.length - 1
      }
      this.index = index;
      this.$nextTick(() => this.$refs.mmAudio.play())
      console.log(this.list);
    },
    play() {//暂停/播放
      this.$nextTick(() => this.$refs.mmAudio.paused ? this.$refs.mmAudio.play() : this.$refs.mmAudio.pause())
    },
    next() {//下一曲
      let index = this.index + 1;
      if (index === this.list.length) {
        index = 0
      }
      this.index = index;
      this.$nextTick(() => this.$refs.mmAudio.play())
    }
  }
}
</script>

<style scoped>
.option {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  text-align: center;
}
.el-button {

}
</style scoped>

