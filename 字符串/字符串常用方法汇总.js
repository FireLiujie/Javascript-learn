//1、查找类方法

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


// 2、截取类方法

/**
 * slice(start,end) (slice严格按照参数的顺序，第0位start，第1位end)
 * substr(start,length)
 * substring(start,end) (substring会比较start和end谁小从谁start)
 * 
 * start 从哪位开始截取(只写start的话，就从start开始一直截取到最后)
 * end 截取到第几位(注意不包含end位)
 * length 截取几位
 * 
 * 字符串中，所有的截取类方法，都是返回一个新的字符串，并不会对原来的字符串进行操作
 */
let a = 1
let b = 2
console.log(str.slice(a,b)) // 2
console.log(str.slice(b,a)) // ''
console.log(str.substring(a,b)) // 2
console.log(str.substring(b,a)) // 2
console.log(str.substring(a,b)) // 2
console.log(str.substring(b,a)) // 2
