<template>
  <div>
    解构
  </div>
</template>

<script>
export default {
  name: 'Destruction',
  data() {
    return {

    }
  },
  created () {
    let [foo, ...f] = [1, 2, 3]
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>