<template>
  <div>
    <div class="aside-header" v-if="!isCollapse"  >这是一个LOGO</div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      :collapse="isCollapse"
      active-text-color="#ffd04b">
      <template v-for="(item,key) in route" >
        <template v-if="!item.hidden" >
          <el-submenu :key="key" v-if="item.children && item.children.length > 1" :index="item.path" >
            <template slot="title" >
              <i :class="item.meta.icon ? item.meta.icon : ''" ></i>
              <span>{{item.meta.title}}</span> 
            </template>
            <el-menu-item v-for="(child, key) in item.children" :key="key" :index="item.path + '/' + child.path" >
              {{child.meta.title}}
            </el-menu-item>
          </el-submenu>

          <el-menu-item :key="key" v-else :index="item.redirect" >
            <i :class="item.meta.icon ? item.meta.icon : ''" ></i>
            <template slot="title" >
              <span>{{item.meta.title }}</span>
            </template>
          </el-menu-item>
      

        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    route () {
      return this.$router.options.routes
    },
    isCollapse () {
      return this.$store.state.sideBar.opened
    },
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
.aside-header {
    width: 100%;
    height: 68px;
    color: #fff;
    line-height: 68px;
    text-align: center;
  }
</style>