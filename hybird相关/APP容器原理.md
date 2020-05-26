### APP 容器，简言之，APP 承载某类应用（H5/RN/Weex/小程序/Flutter...）的运行环境，可主动干预并进行功能扩展，达到丰富能力、优化性能、提升体验的目的，如页面数据预（prefetch）缩短页面可用耗时、WebAR 将 AR 能力赋予 H5、Native 地图与 H5 复合渲染交互

```
通过如上对比可知，Native与H5有很多想通之处的，如：H5是一个html创建一个页面；Android是一个Activity创建一个页面；iOS是UIViewController创建一个页面。不同处在于，Native本身有完善的页面栈管理机制，在同一个runtime环境里控制页面间转换；还可以管理多个窗口(Window)，有多线程/进程（仅Android）辅助合理使用资源保障主线程/进程性能，是APP的体验。而H5本身受运行环境限制，只能在一个窗口里活动，目前缺少同一个Runtime内成熟的页面栈管理机制，当前SPA方式切换view来模拟“页面转场”，已是WebApp体验的一种较佳实现了。所以，在APP里，H5期望能借助更多的Native能力
```

其实，WebView 在 Andriod/ios 两端的实现，都是继承自其 View/UIView 基类。对于 Native 原生来说，WebView 本身通过加载 h5 页面、通过 Chromium/WebKit 内核解析并进行 UI 合成，生成 view，Activity/UIViewController 实例的 View 通过 addView(Andriod)/addSubview(iOS)将 webview 添加进视图层，UI 合成，然后上屏展示。

我们知道，App 可以使用系统能力，但 WebView（类比浏览器）处于安全等考虑，默认并不提供。

## 网络优化

原生 Native 之所以体验平滑，有一关键点，是其页面依赖的静态资源大部分已打进安装包，跟随 App 的安装到了用户本地，节省了网络 IO 开销。

1、静态资源，Html/js/css/图片/字体/视频等，通过离线化、预加载、懒加载、开启 WebView 缓存复用等进行文件获取前置备用或复用，当前用户访问页面加载资源时，容器拦截资源网络请求，命中离线或缓存的资源文件并使用。离线化与预加载可直接节省首次网络 IO 性能消耗，其他方式可以节省二次网络 IO 性能消耗。
离线化：即像 Native 一个打进 APP 安装包内
预加载：APP 启动后，在页面使用前，提前加载资源到用户本地备用
2、接口数据预取，选择合适的时机在用户访问页面前将接口数据获取到，当用户进入页面时，拦截接口王阔请求直接命中本地缓存数据并使用
