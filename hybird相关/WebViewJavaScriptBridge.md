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
