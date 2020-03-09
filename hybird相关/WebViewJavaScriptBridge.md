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
