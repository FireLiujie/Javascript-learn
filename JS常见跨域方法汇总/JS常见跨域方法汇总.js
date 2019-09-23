/**
 * 一、什么是跨域？
 * 1、什么是同源策略及其限制内容？
 *  所谓同源是指“协议+域名+端口”三者相同，即便两个不同的域名指向同一个ip地址，也非同源
 *
 * 一个域名地址的组成：
 * http://  www      .   abc.com     :   8080    /   scripts/jquery.js
 * 协议     子域名        主域名           端口号      请求资源地址
 *
 * 同源策略限制内容有：
 * cookie、localStorage、indexDB等存储性内容
 * DOM 节点
 * AJAX请求发送后，结果被浏览器拦截了
 *
 * 但是有三个标签是允许跨域加载资源：
 * <img src=xxx>
 * <link href=xxx>
 * <script src=xxx>
 */

/**
 * 2、常见跨域场景
 * 当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。
 * 常见跨域场景如图所示
 *
 * 特别说明两点：
 * 第一：如果是协议和端口造成的跨域问题“前台”是无能为力的
 * 第二：在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。
 * “URL的首部”可以理解为“协议、域名和端口必须匹配”
 *
 * 跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。
 *
 * 跨域是为了阻止用户读取到另一个域名下的内容，Ajax可以获取响应，浏览器认为这不安全，所以拦截响应。但是表单
 * 并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止CSRF，因为请求毕竟是发出去了。
 */

/**
 * 二、跨域解决方案
 * 1、jsonp
 * 1）JSONP原理
 * 利用<script>标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的JSON数据。
 * JSONP请求一定需要对方的服务器做支持才可以。
 *
 * 2）JSONP和AJAX对比
 * JSONP和AJAX相同，都是客户端向服务器端发送请求，从服务器端获取数据的方式。但AJAX属于同源策略，JSONP属于非同源策略（跨域请求）
 *
 * 3）JSONP的优缺点
 * JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。缺点是仅支持get方法，具有局限性，不安全可能会遭到XSS攻击
 *
 * 4）JSONP的实现流程
 * 声明一个回调函数，其函数名（如show）当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据（服务器返回的data）；
 * 创建一个<script>标签，把那个跨域的API数据接口地址，赋值给script的src，还要在这个地址中向服务器传递该函数名（可以通过问好传参：?callback=show）
 * 服务器接收到请求后，需要进行特殊处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串，开例如：传递进去的函数名是show，它准备好的数据是show('我不爱你')
 * 最后服务器把准备的数据通过http协议返回给客户端，客户端再调用执行之前声明的回调函数(show)，对返回的数据进行操作。
 *
 */

/**
 * 在开发中可能会遇到多个JSONP请求的回调函数名是相同的，这时候就需要自己封装一个JSONP函数
 */

function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    windwo[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = { ...params, callback }; // wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join("&")}`;
    document.body.appendChild(script);
  });
}

jsonp({
  url: "http://localhost:3000/say",
  params: {
    wd: "Iloveyou"
  },
  callback: "show"
}).then(data => {
  console.log(data);
});

/**
 * 上面这段代码相当于向http://localhost:3000/say?wd=Iloveyou&callback=show这个地址请求数据，然后后台返回show('我不爱你')
 * 最后会运行show()这个函数，打印出'我不爱你'
 */

// server.js
let express = require("express");
let app = express();
app.get("/say", function(req, res) {
  let { wd, callback } = req.query;
  console.log(wd); // Iloveyou
  console.log(callback); // show
  res.end(`${callback}('我不爱你')`);
});
app.listen(3000);

/**
 * 5）jquery的jsonp形式
 * JSONP都是GET和异步请求的，不存在其他的请求方式和同步请求，且jQuery默认就会给JSONP的请求
 * 清除缓存
 */

$.ajax({
  url: "http://crossdomain.com/jsonServerResponse",
  dataType: "jsonp",
  type: "get", //可以省略
  jsonpCallback: "show", //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
  jsonp: "callback", //->把传递函数名的那个形参callback，可省略
  success: function(data) {
    console.log(data);
  }
});

/**
 * 2、cors
 * CORS需要浏览器和后端同时支持。IE8和9需要通过XDomainRequest来实现。
 * 浏览器会自动进行CORS通信，实现CORS通信的关键是后端。只要后端实现了CORS，就实现了跨域。
 *
 * 服务端设置Access-Control-Allow-Origin就可以开启CORS。该属性表示哪些域名可以访问资源
 * 如果设置通配符则表示所有网站都可以访问资源
 *
 * 虽然设置CORS和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种
 * 情况，分别为简单请求和复杂请求。
 *
 * 1）简单请求
 * 只要同时满足以下两大条件，就属于简单请求
 * 条件1：使用下列方法之一：
 * GET
 * HEAD
 * POST
 * 条件2：Content-Type的值仅限于下列三者之一：
 * text/plain
 * multipart/form-data
 * application/x-www-form-urlencoded
 * 请求中的任意XMLHttpRequestUpload对象均没有注册任何事件监听器；
 * XMLHttpRequestUpload对象可以使用XMLHttpRequest.upload属性访问
 * 2）复杂请求
 * 不符合以上条件的请求就肯定是复杂请求了。复杂请求的CORS请求，会在正式
 * 通信之前，增加一次HTTP请求，称为“预检”请求，该请求是option方法的，通过该
 * 请求来知道服务端是否允许跨域请求。
 */

/**
 *  我们用PUT向后台请求时，属于复杂请求，后端需做如下配置：
 */

//允许那个方法访问我
res.setHeader("Access-Control-Allow-Methods", "PUT");
// 预检的存活时间
res.setHeader("Access-Control-Max-Age", 6);
// OPTIONS请求不做任何处理
if (req.method === "OPTIONS") {
  res.end();
}
// 定义后台返回的内容
app.put("/getData", function(req, res) {
  console.log(req.headers);
  res.end("你好啊");
});

/**
 * 接下来我们看下一个完成复杂请求的例子，并且介绍下CORS请求相关的字段
 */

// index.html
let xhr = new XMLHttpRequest();
document.cookie = "name=xiamen"; // cookie不能跨域
xhr.withCredentials = true; // 前端设置是否带cookie
xhr.open("PUT", "http://localhost:4000/getData", true);
xhr.setRequestHeader("name", "xiamen");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
      // 得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader("name"));
    }
  }
};
xhr.send();

//server1.js
let express = require("express");
let app = express();
app.use(express.static(__dirname));
app.listen(3000);

// server2.js
let express = require("express");
let app = express();
let whiteList = ["http://localhost:3000"]; // 设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader("Access-Control-Allow-Origin", origin);
    // 允许携带哪个头访问我
    res.setHeader("Access-Control-Allow-Headers", "name");
    // 允许哪个方法访问我
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    // 允许携带cookie
    res.setHeader("Access-Control-Allow-Credentials", true);
    // 预检的存活时间
    res.setHeader("Access-Control-Max-Age", 6);
    // 允许返回的头
    res.setHeader("Access-Control-Expose-Headers", "name");
    if (req.method === "OPTIONS") {
      res.end(); // OPTIONS请求不做任何处理
    }
  }
  next();
});
app.put("/getData", function(req, res) {
  console.log(req.headers);
  res.setHeader("name", "jw"); // 返回一个响应头，后台需设置
  res.end("我不爱你");
});
app.get("/getData", function(req, res) {
  console.log(req.headers);
  res.end("我不爱你");
});
app.use(express.static(__dirname));
app.listen(4000);

/**
 * 上述代码由http://localhost:3000向http://localhost:4000跨域请求，正如我们上面说的，后端是实现CORS通信的关键
 */
