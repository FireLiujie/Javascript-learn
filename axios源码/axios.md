## kxios 实现流程

1、首先我们需要知道 axios 的本质是什么，因为 axios 能够直接调用传参，所以 axios 本质上是一个函数

2、我们模拟 axios 写自己的 kxios，可以先实现 axios 的 get 方法，再缓慢添加其他功能

3、因为 kxios 有一个 get 方法，因此需要在构造函数中初始化一个 get 方法，接收一个 url

4、因为调用了 get 方法后，紧跟 then，get 函数调用后返回的是一个成功状态的 Promise 对象
