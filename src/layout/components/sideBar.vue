<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1-1</el-menu-item>
          <el-menu-item index="1-2">选项1-2</el-menu-item>
          <el-menu-item index="1-3">选项1-3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项1-4</template>
          <el-menu-item index="1-4-1">选项1-4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" >
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项2-1</el-menu-item>
        <el-submenu index="2-2">
          <template slot="title" >选项2-2</template>
          <el-menu-item index="1-4-1">选项2-2-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="3-1">选项3-1</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
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