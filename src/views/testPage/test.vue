<template>
  <div>
    <!-- <Child> 
        默认插槽
    </Child> -->
    <Child> 
      <template >
        默认内容
      </template>
      <template #first >
        内容1
      </template>
    </Child>
    <hr>
    <Child>
      <template #last="{ testProp = '默认值' }" >
        来自子组件的数据{{testProp}}
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './child'

export default {
  name: 'Test',
  components: {
    Child
  }
}
</script>

<style lang="scss" scoped>

</style>