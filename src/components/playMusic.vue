<template>
  <div class="option">
    <div class="Audio">
      <audio id="audioTag" src="http://m10.music.126.net/20180616134437/fa5844701cd3e4185aaa1d116a27dc3c/ymusic/c498/5279/d7bc/6a78dbbe2ea049e17f623bd4a9aba9fa.mp3" ></audio>
      <div class="pgs">
          <div class="pgs-play" id="progress" style="width: 20%;"></div>
          <img src="images/progress.png">
      </div>
      <div class="controls">
          <span class="played-time">00:00</span>
          <button class="play-pause" id="playPause">
              <span class="icon-btn icon-play"></span>
          </button>
          <span class="audio-time" id="audioTime">0</span>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  
}
</script>

<style scoped>
.Audio{position: relative; width: 500px; margin: 0 auto;}
.pgs{width: 326px; margin: 0 auto 30px; background-color: #E3E8EE; text-align: center; position: relative; overflow: hidden; height: 35px;}
.pgs-play{position: absolute; top:0; left: 4.65%; width: 0; height: 100%; background-color: #4785f9; z-index: 1;}
.pgs img{width: 100%; position: relative; z-index: 2;}
.audio-name{position: absolute; top: 0; width: 100%; left: 0;text-align: center; color: #666; font-size: 12px;}
.controls{width: 100%; height: 40px; padding: 0; text-align: center;}
.play-pause{border: 0; outline: 0; padding: 0; width: 40px; height: 40px; margin: 0 28px; background: none; display: inline-block; vertical-align: middle;}
/* .icon-play{width: 40px; height: 40px; background: url(images/play.png) no-repeat; display: block; color: #478f59;}
.icon-pause{width: 40px; height: 40px; background: url(images/pruse.png) no-repeat; display: block; color: #478f59;} */
.controls span{color: #b3b5b7; font-size: 12px; display: inline-block; width: 34px;}
.audio-time{display: inline-block; vertical-align: middle;}


</style scoped>

