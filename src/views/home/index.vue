<template>
  <div>
    这是首页 {{time}}   {{isCollapse}}
    <el-button @click="handleClick" >toggle按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      time: '11'
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.sideBar.opened
    }
  },
  created() {
    this.time = this.$dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')
    // this.$nextTick(() => {
      setInterval(() => {
        this.time = this.$dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')
      }, 1000)
    // })
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