# Promise 类

Promise 的构造函数必须接收一个函数参数（也就是需要执行异步任务的函数），该函数将在传入以后立即调用，并传入 Promise 对象下的两个方法 resolve 和 reject

1、在 Promise 构造函数中判断，传入的参数是否为 function，否则提示错误 new TypeError('Promise resolver undefined is not a function at new Promise)
