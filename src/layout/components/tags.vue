<template>
  <div class="tag-view" >
    <div class="tag-ul">
      <router-link
        v-for="(tag, index) in visitedViews"
        :key="index"
        :to="tag.path"
        ref="tag"
        class="tag-view-item"
        :class="isActive(tag)?'active':''"
        tag="span">
        {{tag.meta.title}}
        <i v-if="!isAffix(tag)" class="el-icon-close del-tag" @click.prevent="delTag(tag, index)" ></i>
      </router-link>
    </div>
    <span>标签选项</span>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'tagsView',
  data() {
    return {
      affixTags: []
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
    isAffix (tag) {
      return tag.meta && tag.meta.affix
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags () {
      const affixTags = this.affixTags = this.filterAffixTags(this.$router.options.routes)
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('addVisitedView', tag)
        }
      }
    },
    addTags() {
      this.$store.dispatch('addView', this.$route)
    },
    delTag (tag, index) {
      this.$store.dispatch('delView', tag).then(visitedViews => {
        if (this.isActive(tag)) {
          this.toLastView(visitedViews, tag, index)
        }
      })
    },
    toLastView(visitedViews, /* view, */ index) {
      const latestView = visitedViews.slice(index - 1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } /* else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      } */
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
    white-space:nowrap;
    overflow-x: auto;
    overflow-y: hidden;
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