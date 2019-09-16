// 同步请求
// 初始化一个服务器请求对象
var xhr = new XMLHttpRequest();
/**
 * 调用open()方法，他有三个参数1.请求的方式，2.请求的路径，3.同步还是异步
 */
xhr.open("GET", "www.baidu.com", false);
/**
 * 调用send()方法，他有一个参数，就是传输的数据，通常GET请求的数据都是下写在URL上的，GET方法多是传一个null(对于有些浏览器这个参数是必须的，如果不传会报错)，如果是POST请求需要传一个JSON格式的数据
 */
xhr.send(null);
/**
 * 判断请求的结果，此处是同步请求所以按照代码顺序接着往下写即可
 * responseText:返回的数据全部在这里
 * status:相应的状态
 * statusText:相应的状态说明（200表示请求成功的状态）
 */
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  console.log(xhr.responseText);
} else {
  console.log("request", xhr.status);
}

// 异步请求
/**
 * 既然是异步请求，就需要知道当前到了什么状态XMLHttpRequest对象中给我们准备了获取这个值得方法readyState，值对应的状态分别是：
 * 0：未初始化，尚未调用open()方法
 * 1：启动，但未调用send()方法
 * 2：发送，但未接受到响应
 * 3：接受，已经接收到部分响应数据
 * 4：完成，已经接收到全部数据，而且可以在客户端使用了
 */

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
};
xhr.open("GET", "www.baidu.com", true);
xhr.send(null)
// 控制台一次打印0，1，2，3，4。实际中我们只需要关注状态4请求完成时就可以了
// 因此对于onreadystatechange方法的写法通常是：
xhr.onreadystatechange = function(){
    if(xhr.status===200&&xhr.readyState === 4){
        console.log('请求完成请执行相关操作')
    }
}
// 请注意onreadystatechange方法中没有使用this对象是因为在有些浏览器中会报错，而直接使用xml对象就不会有这种情况，是一种兼容性的写法

// POST方法实现方式跟GET基本一样，只需要将open()方法的第一个参数改成POST和send()方法中的参数变成需要传递的参数即可。