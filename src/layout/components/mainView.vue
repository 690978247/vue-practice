<template>
  <section class="main-view">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.main-view {
  margin-top: 12px;
  background: #fff;
  height: calc(100% - 45px - 68px - 12px);
}
</style>