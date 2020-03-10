## WebViewJavaScriptBridge 的基本使用

在 ios 开发 Hybird App 的时候，有两个 WebView 可以选择。  
UIWebView & WKWebView

这两个 WebView 控件，可以完全只借助 iOS 自带的框架进行 OC & JS 交互

1、UIWebView 使用 JavaScriptCore  
2、WKWebView 使用 WKUserContentController

UIWebView 原生的交互原理  
通过一个 JSContext 获取 UIWebView 的 JS 执行上下文  
然后通过这个上下文，进行 OC & JS 的双端交互

```
_jsContext = [webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
    _jsContext.exceptionHandler = ^(JSContext *context, JSValue *exception) {
        NSLog(@"%@",@"获取 WebView JS 执行环境失败了!");
    };
```

WKWebView 原生交互原理  
通过 userContentController 把需要观察的 JS 执行函数注册起来  
然后通过一个协议方法，将所有注册过的 JS 函数执行的参数传递到此协议方法中

注册需要观察的 JS 执行函数

```
 [webView.configuration.userContentController addScriptMessageHandler:self name:@"jsFunc"];

```

在 JS 中调用这个函数并传递参数数据

```
window.webkit.messageHandlers.jsFunc.postMessage({name : "李四",age : 22});
```

OC 中遵守 WKScriptMessageHandler 协议

```
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message
```

> 此协议方法里的 WKScriptMessage 有 name & body 两个属性。name 可以判断是哪个 JSFunc 调用了。body 则是 JSFunc 传递到 OC 的参数

### WebViewJavaScriptBridge

WebViewJavaScriptBridge 用于 WKWebView & UIWebView 中 OC 和 JS 交互

它的基本原理是：

> 把 OC 的方法注册道桥梁中，让 JS 去调用  
> 把 JS 的方法注册在桥梁中，让 OC 去调用

#### 注册自己，调用它人

### WebViewJavaScriptBridge 基本使用

1、首先在项目中导入 WebViewJavaScriptBridge 框架

```
pod ‘WebViewJavascriptBridge’
```

2、导入头文件 #import <WebViewJavascriptBridge.h>  
3、建立 WebViewJavaScriptBridge 和 WebView 之间的关系

```
_jsBridge = [WebViewJavascriptBridge bridgeForWebView:_webView];
```

4、在 HTML 文件中，复制粘贴这两段 JS 函数

```
function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback]; // 创建一个 WVJBCallbacks 全局属性数组，并将 callback 插入到数组中。
        var WVJBIframe = document.createElement('iframe'); // 创建一个 iframe 元素
        WVJBIframe.style.display = 'none'; // 不显示
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'; // 设置 iframe 的 src 属性
        document.documentElement.appendChild(WVJBIframe); // 把 iframe 添加到当前文导航上。
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }

    // 这里主要是注册 OC 将要调用的 JS 方法。
    setupWebViewJavascriptBridge(function(bridge){

    });
```

#### 到此为止，基本的准备工作就做完了。现在需要往桥梁中注入 OC 方法和 JS 函数了。

## 往桥梁中注入 OC 方法和 JS 函数

### 往桥梁中注入 OC 方法

```
[_jsBridge registerHandler:@"scanClick" handler:^(id data, WVJBResponseCallback responseCallback) {
        NSLog(@"dataFrom JS : %@",data[@"data"]);

        responseCallback(@"扫描结果 : www.baidu.com");
    }];
```

#### 这段代码的意思：

1、scanClick 是 OC block 的一个别名  
2、block 本身，是 JS 通过某种方式调用到 scanClick 的时候，执行的代码块
3、data，由于 OC 这端由 JS 调用，所以 data 是 JS 端传递过来的数据  
4、responseCallback OC 端的 block 执行完毕之后，往 JS 端传递的数据

#### 往桥梁中注入 JS 函数

OC 方法，在 OC 中注入。JS 的方法所以必然就需要在 JS 中注入的。  
在 JS 的方法如何注入到桥梁呢？

之前，在准备工作的时候，有两段 JS 代码  
需要在第二段 JS 代码中，注入 JS 的函数

```
// 这里主要是注册 OC 将要调用的 JS 方法。
    setupWebViewJavascriptBridge(function(bridge){
        // 声明 OC 需要调用的 JS 方法。
        bridge.registerHanlder('testJavaScriptFunction',function(data,responseCallback){
            // data 是 OC 传递过来的数据.
            // responseCallback 是 JS 调用完毕之后传递给 OC 的数据
            alert("JS 被 OC 调用了.");
            responseCallback({data: "js 的数据",from : "JS"});
        })
    });
```

#### 这段代码的意思：

1、testJavaScriptFunction 是注入到桥梁中 JS 函数的别名。以供 OC 端使用  
2、回调函数的 data。既然 JS 函数由 OC 调用，所以 data 是 OC 端传递过来的数据。  
3、responseCallbakc。JS 调用在被 OC 调用完毕之后，向 OC 端传递的数据

#### 基本就是：

> OC 端注册 OC 的方法，OC 端调用 JS 的函数
> JS 端注册 JS 的函数，JS 端调用 OC 的方法。

## 场景

#### JS -> OC 的交互

在 HTML 中，有个按钮，点击这个按钮，修改 NavigationBar 的颜色。

1、在 OC 端，往桥梁注入一个修改 NavigationBar 颜色的 block.  
2、在 JS 端，调用这个 block，来间接的达到修改颜色的目的。

首先，在 OC 中，通过 WebViewJavaScriptBridge 注册一个修改 navigationBar 颜色的 Block.

```
[_jsBridge registerHandler:@"colorClick" handler:^(id data, WVJBResponseCallback responseCallback) {
       self.navigationController.navigationBar.barTintColor = [UIColor colorWithRed:arc4random_uniform(256) / 255.0 green:arc4random_uniform(256) / 255.0 blue:arc4random_uniform(256) / 255.0 alpha:1.0];

        responseCallback(@"颜色修改完毕!");
    }];
```

然后在 JS 中，通过某种方式去调用这个 OC 的 Block。

```
WebViewJavascriptBridge.callHandler('colorClick',function(dataFromOC) {
            alert("JS 调用了 OC 注册的 colorClick 方法");
            document.getElementById("returnValue").value = dataFromOC;
        })
```

这里通过某种方式就是使用 WebViewJavascriptBridge.callHandler('OC 中 block 别名',callback)的方式来调用

#### OC -> JS 的交互

OC 上有一个 UIButton，点击这里的按钮，把 HTML body 的颜色修改成橙色。

首先，往桥梁中，注入一个修改 HTML body 颜色的 JSFunction
