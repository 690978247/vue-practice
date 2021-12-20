<template>
  <div>
    这是nav3-1 DPlayer + hls播放视频页面
    <d-player ref="player" style="width: 500px; height: 300px" :options="options"></d-player>
    <d-player ref="player" style="width: 500px; height: 300px" :options="options"></d-player>
  </div>
</template>

<script>
export default {
  name: 'Nav3-1',
  data () {
    return {
      options: {
        autoplay: true, // 自动播放
        mutex: false,   // 允许多个同时播放
        volume: 0, // 音量
        video: {
          url: 'http://220.161.87.62:8800/hls/0/index.m3u8'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>