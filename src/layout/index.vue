<template>
  <div class="app-wrap" >
    <sideBar :class="classObj" class="aside" />
    <div class="app-main" >
      <div class="main-header">
        <i class="iconfont iconcaidan header-icon" @click="toggleMenu" ></i>
      </div>
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
  components: { sideBar, tagsView, mainView },
  computed: {
    sidebar () {
      return this.$store.state.sideBar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
      }
    }
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('toggleSidebar')
    },
  }
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
  width: $aside-width;
  height: 100%;
  background:$layout-back-color;
  transition: width .5s;
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
    display: flex;
    align-items: center;
    .header-icon {
      font-size: 22px;
      color: #fff;
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
.openSidebar {
  width: 70px;
  transition: width .5s;
}
</style>