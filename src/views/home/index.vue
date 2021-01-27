<template>
  <div>
    这是首页   {{isCollapse}}
    <el-button @click="handleClick" >按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

</style>