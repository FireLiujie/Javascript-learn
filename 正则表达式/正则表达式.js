/**
 * test
 * test方法用来判断字符串中是否能匹配到正则设定的内容，如果能匹配则返回true，否则返回false
 * 语法：正则.test(字符串)
 */

 var str = 'fyguhijfuh'
 var re = /a/
 console.log(re.test(str)) // false