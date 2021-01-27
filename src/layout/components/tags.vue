<template>
  <div class="tag-view" >
    <div class="tag-ul">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        :to="tag.path"
        ref="tag"
        class="tag-view-item"
        :class="isActive(tag)?'active':''"
        tag="span">
        {{tag.meta.title}}
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
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route () {
      this.addTags()
    }
  },
  mounted() {
    this.initTags ()
    this.addTags()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    },
    initTags () {
      this.$store.dispatch('addVisitedView', this.$route)
    },
    addTags() {
      this.$store.dispatch('addView', this.$route)
    },
  }
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
    .active {
        background-color: #42b983 !important;
        color: #fff;
        border-color: #42b983;
        // &::before {
        //   content: '';
        //   background: #fff;
        //   display: inline-block;
        //   width: 8px;
        //   height: 8px;
        //   border-radius: 50%;
        //   position: relative;
        //   margin-right: 2px;
        // }
      }
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