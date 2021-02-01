<template>
  <section class="main-view">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" >
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'MainView',
  data () {
    return {

    }
  },
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.path
    },
  }
}
</script>

<style lang="scss" scoped>
.main-view {
  margin-top: 12px;
  background: #fff;
  height: calc(100% - 45px - 68px - 12px);
}
</style>