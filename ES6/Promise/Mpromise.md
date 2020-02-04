# Promise 类

Promise 的构造函数必须接收一个函数参数（也就是需要执行异步任务的函数），该函数将在传入以后立即调用，并传入 Promise 对象下的两个方法 resolve 和 reject

1、在 Promise 构造函数中判断，传入的参数是否为 function，否则提示错误 new TypeError('Promise resolver undefined is not a function at new Promise)

2、当传入的参数为 function 时，立即执行该函数，且在该函数上绑定两个方法 resolve 和 reject

3、Promise 对象共有三种状态，分别是 pending、resolved 和 rejected，初始化 Promise 对象为 pending 状态，且 Promise 对象的状态只能通过调用函数 resolve 和 reject 来改变，当调用 resolve 时，状态由 pending 改变为 resolved，当调用 reject 时，状态由 pending 改变为 rejected，这里需要注意的是，当 Promise 对象的状态变更过后，就不会再改变了，因此需要在 resolve 和 reject 函数调用改变状态之前，判断 Promise 对象的状态是否为 pending，如果是，则变更 Promise 对象的状态；如果不是，则直接返回。

4、在实例化 Promise 对象时传入的函数中绑定 resolve 和 reject 函数时，因为 resolve 和 reject 函数调用时，并未在 window 中定义，因此需要将 Promise 对象的 this 绑定到这两个函数上

5、由于 then 函数中的两个函数需要在 resolve 或者 reject 函数执行之后再执行，故考虑在初始化时，先将 then 函数中的两个参数存入到一个队列中去，当调用 resolve 时，再从队列中将成功的函数取出来执行，当调用 reject 时，从队列中将失败的函数取出来执行。因此可以定义两个队列 resolvedQueue 和 rejectedQueue，在 then 函数中将 then 的两个函数参数 push 到这两个队列中去

6、到这里还有一个问题，当 new MPromise 中并不使用异步函数，那么会出现 then 的两个函数参数并未 push 到 resolvedQueue 和 rejectedQueue 队列中去，因此我们可以强制将 resolve 和 reject 函数变为异步任务，因为 Promise 的 then 为微任务，微任务的优先级要高与宏任务，我们可以采用 H5 新增的 postmessage 方法来达到微任务的效果

7、传值问题，我们可以在 resolve 和 rejecrt 中传值，该值将会作为 then 的两个函数参数的入参，故我们可以在 resolve 或者 reject 函数中获取该参数，再将该参数传入到从队列中取出的函数中

8、MPromise 需要解决的核心问题就是 then 的链式调用，then 函数执行之后还可以接着执行 then 函数，因此我们需要在 then 函数中返回一个新的 MPromise 对象，且该 MPromise 对象状态是已经变更的，但是这个新的 MPromise 对象的状态变更需要在第一个 MPromise 的状态变更结束后再变更。这个问题我们可以采用封装一个新的函数 newResolvedHandler，将第一个 MPromise 的 resolveHandler 和 then 中 new MPromise 的 resolve 都在 newResolvedHandler 中执行，且第一个 MPromise 中的 resolveHandler 需要先执行，之后再执行 then 中 new MPromise 中的 resolve

9、then 链式调用还有另外一个问题需要解决，前一个 then 的返回值应该是后一个 then 的入参，因此，我们需要将前一个 MPromise 的 resolveHandler 的返回值传入到 new MPromise 中的 resolve 中去

10、还有这样一个问题，前一个 MPromise 的 resolvehandler 的返回值可能并不是一个值，可能是一个新的 MPromise。因此，我们需要判断 resolveHandler 的返回值是否为 MPromise，如果是，那么需要在该返回的 MPromise 状态变更之后再执行之后的 then 函数；否则，直接将返回值传入到 new MPromise 的 resolve 中去

11、catch 方法将失败时执行的函数注册到 rejectedQueue 队列中去，当调用 reject 时，从 rejectedQueue 队列中取出该函数执行

12、finally 方法用于指定不管 Promise 对象最后状态如何，都会在 then 或者 catch 指定的回调函数执行完之后执行的操作。那么我们可以定义一个 finallyQueue 队列，初始化时将 finally 函数的参数放入到队列中去，在 resolve 和 reject 函数中，不管 MPromise 对象的状态变更为 resolved 或者 rejected，都会从 finallyQueue 队列中取出来执行

13、MPromise.resolve()方法则直接 new 一个新的 MPromise，并执行 resolve 方法

14、MPromise.reject()方法则直接 new 一个新的 MPromise，并执行 reject 方法

15、all 方法接收数组，所有的都成功才会返回成功的值，如果有一个返回失败，则返回失败

16、race 方法接收数组，任意一个实例改变状态，就返回先改变状态的返回值

17、allSettled 方法接收数组，只要所有参数都执行完毕了，则执行后面的代码
