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
var a = 1
var b = 2
console.log(str.slice(a,b)) // 2
console.log(str.slice(b,a)) // ''
console.log(str.substring(a,b)) // 2
console.log(str.substring(b,a)) // 2
console.log(str.substring(a,b)) // 2
console.log(str.substring(b,a)) // 2

//3、大小写转换

/**
 * toUpperCase() 转换成大写
 * toLowerCase() 转换成小写
 * 需要注意的是，这两个方法并不会改变原字符串
 */
console.log(str.toUpperCase()) // 12 ASD,ASD-12ASD
console.log(str.toLowerCase()) // 12 asd,asd-12asd

// 4、分割字符串

/**
 * str.split('分隔符') 把字符根据分隔符转换数组
 * @return 转换后的数组
 * 需要注意的是，split方法也不会改变原字符串
 */
var arr = str.split('a')
console.log(arr) // ['12','sd',', ','sd-12','sd']

//5、去掉首位空格

/**
 * str.trim()
 */

 var str1 = '            12asd,aSd-12Asd                '
 console.log(str1)
 console.log(str1.trim())

 // 6、转换成charCode编号与反转成字符串

 /**
  * str.charCodeAt(index) 将字符串的第几位，转换成charCode编号
  * String.fromCharCode(num1[,...[,numN]]) 将charCode再转换成字符
  * eg.
  * "1":49
  * "2":50
  * 字符串在比较时，会比较charCode，并且字符串比较是一位一位向后比较的，如果第0位编码一样，才会比较下一位，否则直接返回第0位的比较结果
  */

  var a = '1199'
  var b = '21'
  console.log(a > b) // false
  console.log(a.charCodeAt(2)) // 57
  
  var str2 = '你好'
  var arr2 = []
  var newStr = ''
  for(var i = 0;i<str2.length;i++){
      arr2.push(str2.charCodeAt(i))
  }

  console.log(arr2) // [20320,22909]
  for(var i =0;i<arr2.length;i++){
      newStr += String.fromCharCode(arr2[i])
  }
  console.log(newStr) // 你好
  

  // 7、连接字符串

  /**
   * str.concat(string2[,string3,...stringN]) 
   * 把两个（或多个）字符串连接成一个新的字符串返回
   */

   var s1 = 'ABC'
   var s2 = '10.234'
   var s3 = s1.concat(s2,'a','b')
   console.log(s3) // ABC10.234ab
   