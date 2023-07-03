/* eslint-disable no-console */
// @ts-expect-error missing types
import fs from 'then-fs'

fs.readFile('./files/1.txt', 'utf8')
  .catch((err: any) => { // 提前捕获错误，后续的 then 继续执行，不会中断
    console.log(err.message)
  })
  .then((r1: any) => {
    console.log(r1)
    return fs.readFile('./files/2.txt', 'utf8')
  })
  .then((r2: any) => {
    console.log(r2)
    return fs.readFile('./files/3.txt', 'utf8')
  })
  .then((r3: any) => {
    console.log(r3)
  })
  .catch((err: any) => { // 捕获错误
    console.log(err.message)
  })

const promiseArr = [
  fs.readFile('./files/1.txt', 'utf8'),
  fs.readFile('./files/2.txt', 'utf8'),
  fs.readFile('./files/3.txt', 'utf8'),
]

Promise.all(promiseArr)
  .then(([r1, r2, r3]) => {
    console.log({ r1, r2, r3 })
  })
  .catch((err: any) => {
    console.log(err.message)
  })

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('123')
  }, 1000)
}).then((res) => {
  console.log(res) // 1秒后打印123
}).then((res) => {
  console.log(res) // undefined
  return '456'
}).then((res) => {
  console.log(res) // 456
})
