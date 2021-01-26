<template>
  <div class="tag-view" >
    <div class="tag-ul">
      <router-link
        v-for="(tag,key) in visitedViews"
        :key="key"
        to="/nav"
        ref="tag"
        class="tag-view-item"
        tag="span">
        {{tag}}
        <i class="el-icon-close del-tag" ></i>
      </router-link>
    </div>
    <span>标签选项</span>
  </div>
</template>

<script>
export default {
  name: 'tagsView',
  data() {
    return {
      visitedViews: [1,2,3,4]
    }
  },
}
</script>

<style lang="scss" scoped>
.tag-view {
  height: 45px;
  background: #fff;
  box-shadow:0px 8px 5px -3px #ccc;
  display: flex;
  line-height: 45px;
  justify-content: space-between;
  padding: 0 5px;
  .tag-ul {
    width: 83%;
    height: 100%;
  }
  .tag-view-item {
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    padding: 8px 25px 8px 12px;
    position: relative;
  }
  .del-tag {
    position: absolute;
    font-size: 13px;
    top: 4px;
    right: 4px;
  }
}
</style>