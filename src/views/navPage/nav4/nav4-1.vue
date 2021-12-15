<template>
  <div>
    这是videoJS  vue-video-player  videojs-contrib-hls视频页面
    <!-- 播放m3u8视频 -->
      <video-player
        style="width: 500px; height: 300px"
        :playsinline="true"
        :options="'http://192.168.0.197:83/openUrl/ZNbwjN6/live.m3u8'|videoOption">
      </video-player>

      <video-player
        style="width: 500px; height: 300px"
        class="video-player vjs-custom-skin"
        :playsinline="true"
        :options="'http://220.161.87.62:8800/hls/0/index.m3u8'|videoOption">
      </video-player>
  </div>
</template>

<script>
import "videojs-contrib-hls"
export default {
  name: 'Nav4-1',
  filters:{
        videoOption(val) {
            console.log('val',val)
            return {
                live: true,
                preload: "auto",
                autoplay: true,
                language: "zh-CN",
                aspectRatio: "16:8",
                fluid: true,
                sources: [
                    {
                        src: val //url地址
                    }
                ],
                notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true //全屏按钮
                },
                flash: {
                    hls: {
                        withCredentials: false
                    }
                }
            }
        },
  }
}
</script>

<style lang="scss" scoped>

</style>