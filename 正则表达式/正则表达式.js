/**
 * test
 * test方法用来判断字符串中是否能匹配到正则设定的内容，如果能匹配则返回true，否则返回false
 * 语法：正则.test(字符串)
 */

 var str = 'fyguhijfuh'
 var re = /a/
 console.log(re.test(str)) // false

 /**
  * search
  * search方法用来查找字符串中是否含有正则规定的内容，如果有则返回索引，否则返回-1
  * 语法：字符串.search(正则)
  */
 var str = 'tuiosfausfi'
 var re = /ab/
 console.log(str.search(re)) // -1