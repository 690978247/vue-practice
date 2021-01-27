<template>
  <div>
    这是首页   {{isCollapse}}
    <el-button @click="handleClick" >按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.sideBar.opened
    }
  },
  methods: {
    handleClick () {
      this.$store.dispatch('toggleSidebar')
    },
  }
}
</script>

<style lang="scss" scoped>
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
//   }
</style>