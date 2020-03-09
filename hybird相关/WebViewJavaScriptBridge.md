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
