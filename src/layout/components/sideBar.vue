<template>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <template v-for="(item,key) in route" >
        <div :key="key" v-if="!item.hidden" >
          <el-submenu v-if="item.children && item.children.length > 1" :index="item.path" >
            <template slot="title" >
              {{item.meta.title}}
            </template>
            <el-menu-item v-for="(child, key) in item.children" :key="key" :index="item.path + '/' + child.path" >
              {{child.meta.title}}
            </el-menu-item>
          </el-submenu>

          <el-menu-item v-else :index="item.redirect" >
            {{item.meta.title }}
          </el-menu-item>
        </div>
      </template>
    </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    route () {
      return this.$router.options.routes
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(JSON.stringify(this.$router.options.routes))
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>