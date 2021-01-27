<template>
  <div class="app-wrap" >
    <sideBar class="aside" />
    <div class="app-main" >
      <div class="main-header"></div>
      <tagsView></tagsView>
      <mainView></mainView>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar'
import tagsView from './components/tags'
import mainView from './components/mainView'

export default {
  name: 'Layout',
  components: { sideBar, tagsView, mainView }
}
</script>

<style lang="scss" scoped>
$head-height: 68px;
$aside-width: 240px;
$layout-back-color: #545C64;

.app-wrap {
  width: 100%;
  height: 100%;
  display: flex;
}
.aside {
  width: $aside-width !important;
  height: 100%;
  background:$layout-back-color;
  overflow: hidden;
}
.app-main {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  .main-header {
    width: 100%;
    height: $head-height;
    background: $layout-back-color;
  }
}
</style>