/**
 * 问题详情描述：安卓微信H5弹出软键盘后挡住input输入框
 * 出现原因分析：待补充
 * 解决办法：给input和textarea标签添加focus事件，如下，先判断是不是安卓手机下的操作，当然，可以不用判断机型，Document对象属性和方法，setTimeout延时0.5秒，因为调用安卓键盘有一点迟钝，导致如果不延时处理的话，滚动就失效了
 */

/**
  *  changefocus(){
      let u = navigator.userAgent, app = navigator.appVersion;
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
      if(isAndroid){
        setTimeout(function() {
         document.activeElement.scrollIntoViewIfNeeded();
         document.activeElement.scrollIntoView();
        }, 500);       
      }
    }

    拓展知识：Element.scrollIntoView()方法让当前的元素滚动到浏览器窗口的可视区域内。而Element.scrollIntoViewIfNeeded()方法也是用来将不再浏览器窗口的可视区域内的元素滚动到浏览器窗口的可见区域。但如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。
  */
