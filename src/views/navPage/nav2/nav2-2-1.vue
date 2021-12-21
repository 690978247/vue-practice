<template>
  <div>
    这是nav2-2-1页面
    <div id="divPlugin" class="plugin"></div>
  </div>
</template>

<script>
import { WebVideoCtrl } from "../../../../public/static/HKWS/demo/codebase/webVideoCtrl";
import $ from "jquery";

export default {
  name: 'Nav2-2-1',
  data () {
    return {
      oPlugin: {
        iWidth: 600,             // plugin width
        iHeight: 400             // plugin height
      },
      oLiveView: {
        iProtocol: 1,            // protocol 1：http, 2:https
        szIP: "172.10.18.59",    // protocol ip
        szPort: "80",            // protocol port
        szUsername: "admin",     // device username
        szPassword: "12345678q", // device password
        iStreamType: 1,          // stream 1：main stream  2：sub-stream  3：third stream  4：transcode stream
        iChannelID: 1,           // channel no
        bZeroChannel: false      // zero channel
      }
    }
  },
  mounted () {
    this.videoInitPlugin()
  },
  methods: {
    videoInitPlugin() {
      var iRet = WebVideoCtrl.I_CheckPluginInstall();
      if (iRet === -1) {
        alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装！");
        // this.downLoadPlugin();
        return;
      }
      this.initPlugin();
    },
    initPlugin() {
      let $this = this
      // 初始化插件参数及插入插件
      WebVideoCtrl.I_InitPlugin('100%', '100%', {
          bWndFull: true,//是否支持单窗口双击全屏，默认支持 true:支持 false:不支持
          iWndowType: 1,
          bDebugMode: true,
          cbInitPluginComplete () {
              WebVideoCtrl.I_InsertOBJECTPlugin("divPlugin");

              // 检查插件是否最新
              if (-1 == WebVideoCtrl.I_CheckPluginVersion()) {
                  alert("检测到新的插件版本，双击开发包目录里的WebComponentsKit.exe升级！");
                  return;
              }

              // 登录设备
              WebVideoCtrl.I_Login(this.oLiveView.szIP, this.oLiveView.iProtocol, this.oLiveView.szPort, this.oLiveView.szUsername, this.oLiveView.szPassword, {
                  success: function (xmlDoc) {
                      // 开始预览
                      var szDeviceIdentify = this.oLiveView.szIP + "_" + this.oLiveView.szPort;
                      setTimeout(function () {
                          WebVideoCtrl.I_StartRealPlay(szDeviceIdentify, {
                              iStreamType: this.oLiveView.iStreamType,
                              iChannelID: this.oLiveView.iChannelID,
                              bZeroChannel: this.oLiveView.bZeroChannel
                          });
                      }, 1000);
                  }
              });
          }
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.plugin {
    width: 600px;
    height: 400px;
}
</style>