<template>
  <div>
    这是第二个测试页面
  </div>
</template>

<script>
var Book = function (id, name, price) {
  // 私有属性
  var num = 1
  // 私有方法
  function checkId() {
  }
  // 特权方法
  this.getName = function () {}
  this.getPrice = function () {}
  this.setName = function () {}
  this.setPrice = function () {}
  // 对象公有属性
  this.id = id
  // 对象公有方法
  this.copy = function () {}
  // 构造器
  this.setName(name)
  this.setPrice(price)
}

// 类静态公有属性 （对象不能访问）
Book.isChinese = true
// 类静态共有方法（对象不能访问）
Book.resetTime = function () {
  // console.log('new Time')
}
Book.prototype = {
  // 公有属性
  isJSBook: false,
  // 公有方法
  display: function () {}
}

var book = new Book(1, '测试测试1', 111)

// console.log(book.num)           // undefined
// console.log(book.isJSBook)      // false
// console.log(book.id)            // 1
// console.log(book.isChinese)     // undefined


// console.log(Book.num)           // undefined
// console.log(Book.isJSBook)      // undefined
// console.log(Book.id)            // undefined
// console.log(Book.isChinese)     // true
export default {
  name: 'Test2'
}
</script>

<style lang="scss" scoped>

</style>