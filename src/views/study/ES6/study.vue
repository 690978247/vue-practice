<template>
  <div>
    学习
    ...扩展运算符能够正确识别四个字节的unicode字符
    <br>
    ?? ： null判断运算符(可配合链判断运算符使用)
    <br>
    a ?? b: 如果a为null 或undefinded ,则默认值b会生效. 否则返回a  
    <br>
    Object.is(): 比较两值是否相等。1：+0 不等于-0 。  2：Object.is(NaN,Nan) 返回true,即NaN等于本身
    <br>
    __proto__: 用来读取或设置当前对象的原型对象（prototype）
  </div>
</template>

<script>
// var handler = {
//   get: function (target, name) {
//     debugger
//     if (name === 'prototype') {
//       return Object.prototype
//     }
//     return 'Hello, ' + name
//   },
//   apply: function (target, thisBinding, args) {
//     debugger
//     return args[0]
//   },
//   construct: function () {
//     debugger
//     return { value: args[1] }
//   }
// }

// var fproxy = new Proxy(function(x, y) {
//   debugger
//   return x + y
// },handler)
// debugger
// console.log(fproxy(1, 2))

export default {
  name: 'Study',
  data () {
    return {
      data: [1,2,3,5,8,13,21,34,55,89]
    }
  },
  created () {
    // var a = this.Fibonacci2(10)
    // console.log(this.trampoline(this.sum(1, 100000)))
    // console.log(this.sum(1, 100000))
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>