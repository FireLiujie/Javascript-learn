/**
 * Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
 */
// const target = { a: 1 }
// const source1 = { b: 2 }
// const source2 = { c: 3 }
// Object.assign(target, source1, source2)
// console.log(target)
/**
 * 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
 */

const target = { a: 1, b: 2 }
const source1 = { b: 2, c: 2 }
const source2 = { c: 3 }
Object.assign(target, source1, source2)
console.log(target)

/**
 * Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性(enumerable:false)
 */

 /**
  * 注意点
  * （1）浅拷贝
  * Object.assign方法实行的是浅拷贝，而不是深拷贝。
  */