/**
 * 问题详情描述：输入内容，软键盘弹出，页面内容整体上移，但是键盘收起，页面内容不下滑
 * 出现原因分析：固定定位的元素在元素内Input框聚焦的时候弹出的软键盘占位，失去焦点的时候软键盘消失，但是还是占位的，导致input框不能再次输入
 * 解决办法：在失去焦点的时候给一个事件
 */
/**
 * <div class="list-warp">
    <div class="title"><span>投·被保险人姓名</span></div>
    <div class="content">
        <input class="content-input" 
                placeholder="请输入姓名"
                v-model="peopleList.name"
            @focus="changefocus()"
            @blur.prevent="changeBlur()"/>    
    </div>
    </div>

    changeBlur(){
      let u = navigator.userAgent, app = navigator.appVersion;
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if(isIOS){
        setTimeout(() => {
          const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
          window.scrollTo(0, Math.max(scrollHeight - 1, 0))
          }, 200)
      }
    }

    拓展知识： position:fixed的元素在ios里，收起键盘的时候会被顶上去，特别是第三方键盘
 */
