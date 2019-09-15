/**
 * 获取字符串的第n位
 * str.charAt(n)
 */
let str = '12 asd,asd-12asd'
console.log(str.charAt(7)) // a

/**
 * 查找str中是否包含subStr，如果包含就返回subStr第一次出现的位置，index表示从第几位开始向后查找，如果找不到就返回-1
 * str.indexOf(subStr,index)
 */
console.log(str.indexOf('sd')) // 4

/**
 * 查找str中是否包含subStr，如果包含就返回subStr第一次出现的位置，index表示从第几位开始向前查找，如果找不到就返回-1
 * str.lastIndexOf(subStr,index)
 */
console.log(str.lastIndexOf('sd')) // 14