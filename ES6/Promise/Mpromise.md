# Promise 类

Promise 的构造函数必须接收一个函数参数（也就是需要执行异步任务的函数），该函数将在传入以后立即调用，并传入 Promise 对象下的两个方法 resolve 和 reject

1、在 Promise 构造函数中判断，传入的参数是否为 function，否则提示错误 new TypeError('Promise resolver undefined is not a function at new Promise)

2、Promise 有三种状态，分别是 pending,resolved,rejected，初始化时为 pending 状态，状态可由 pending 变更为 resolved 或者 rejected，当变更为 resolved 或者 rejected 之后，状态不能再变更了，在 Promise 类中准备三个静态状态 PENDING、RESOLVED、REJECTED

3、传入的函数自带 resolve 和 reject 两个函数参数，故需要在构造函数中调用时将该参数传入进来，切将 this 指向绑定到该函数上

4、由于 then 函数中函数参数需要在 resolve 或者 reject 函数执行之后再执行，故我们可以先在执行 then 函数时，将 then 函数的函数参数注册到执行队列中去，当 resolve 函数或者 reject 函数执行后再执行 then 函数的函数参数，故我们在构造函数中添加两个队列，resolvedQueue 和 rejectedQueue，在 resolve 和 reject 函数中判断当前 Promise 状态是否为 PENDING，如果为 PENDING 则执行队列中的第一个函数，否则直接 return

5、Promise 函数是可以实现链式调用的，为了实现链式调用，我在 then 中返回一个新的 Promise 对象，此时需要将该 Promise 对象的 resolve 一起注册到可执行队列中去，故用了 newResolvedHandler 和 newRejectedHandler 来包装之前的 resolveHandler 和 rejectedHandler 函数

6、finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

7、
