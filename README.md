# learn-promise

## 回调地狱
- 多层回调函数的相互嵌套，就形成了回调地狱。示例代码如下：
- 回调地狱的缺点：
  - 代码耦合性太强，牵一发而动全身，难以维护
  - 大量冗余的代码相互嵌套，代码的可读性变差

## Promise
- 为了解决回调地狱的问题，ES6（ECMAScript 2015 ）中新增了 Promise 的概念。

### 基本概念
- ① Promise 是一个构造函数
  - 我们可以创建 Promise 的实例 `const p = new Promise()`
  - new 出来的 Promise 实例对象， 代表一个异步操作
- ② `Promise.prototype` 上包含一个 `.then()` 方法
  - 每一次 new Promise() 构造函数得到的实例对象，都可以通过原型链的方式访问到 .then() 方法，例如 `p.then().then()`
- ③ `.then()` 方法用来预先指定成功和失败的回调函数
  - `p.then(成功的回调函数 ，失败的回调函数)`
  - `p.then(result => { }, error => {})`
  - 调用 `.then()` 方法时，成功的回调函数是必选的、失败的回调函数是可选的
