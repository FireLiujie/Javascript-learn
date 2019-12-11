/**
 * 问题详情描述：在ios端，上下滑动页面时，如果页面高度超出一屏，就会出现明显的卡顿，页面有部分内容显示不全的情况
 * 出现原因：笼统说微信浏览器的内核，Android上面是使用自带的WebKit内核，IOS里面由于苹果的原因，使用了自带的Safari内核，Safari对于overflow-scrolling用了原生控件来实现。对于有webkit-overflow-scrolling的网页，会创建一个UIScrollView，提供子layer给渲染模块使用【有待考证】
 * 解决办法：只需要在公共样式加入下面这行代码
 */

/**
 * -webkit-overflow-scrolling:touch;
 */

/**
 * 但是，这个属性是有Bug的，比如如果你得页面中有设置了绝对定位的节点，那么该节点的显示会错乱，当然还会有其他的一些Bug。
 */

/**
 * -webkit-overflow-scrolling:touch是什么？
 * -webkit-overflow-scrolling属性控制元素在移动设备上是否使用滚动回弹效果。
 * auto:使用普通滚动，当手指从触摸屏上移开，滚动会立即停止
 * touch:使用具有回弹效果的滚动，当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。
 */
