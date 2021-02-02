<template>
  <div>
    这是第二个测试页面
  </div>
</template>

<script>
Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn
  return this
}

var Methods = function () {}
Methods.addMethod('CheckName', function () {
  conosole.log('Name')
}).addMethod('CheckEmail', function () {
  conosole.log('Email')
})


export default {
  name: 'Test2'
}
</script>

<style lang="scss" scoped>

</style>