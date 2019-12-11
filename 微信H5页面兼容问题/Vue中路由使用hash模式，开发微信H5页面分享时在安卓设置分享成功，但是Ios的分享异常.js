/**
 * 问题详情描述：ios当前页面分享给好友，点击进来是正常，如果二次分享，则跳转到事业；使用vue router跳转到第二个页面后再分享时，分享设置失败；以上安卓分享都是正常
 * 出现原因分析：jssdk是后端进行签署，前端校验，但是有时跨域，ios是分享以后会自动带上from=signlemessage&isappinstalled=0以及其他参数，分享朋友圈参数还不一样，莫斯系统不一样参数也不一样，但是每次获取url并不能获取后面这些参数
 * 解决办法：
 * (1)可以使用改页面this.$router.push跳转，为window.location.href去跳转，而不使用路由跳转，这样可以使用地址栏的地址与当前页的地址一样，可以分享成功（适合分享的页面不多的情况下，作为一个单页运用，这样刷新页面跳转）
 * (2)把入口地址保存在本地，等需要获取签名的时候取出来，注意：sessionStorage.setItem('href',href)；只在刚进入单应用的时候保存！（该方法未验证）
 */

/**
 * 如果能用小程序写的页面，尽量上小程序吧，H5开发在微信开发者工具里看页面效果可能看不出来问题，因为不能唤起软键盘。避免频繁线上发布，可以用花生壳或者idcfengye，做内网穿透，搭建一个可以通过域名访问的开发环境的H5页面，在手机上看看效果。微信内容浏览器缓存机制，会导致刚提交的代码（特别是js）效果要半个小时左右才生效
 */
