/**
 * 获取 url 后面的参数方法
 * @param {*} name 想要获取的参数名称
 * 使用
 * let url = '?username=zhangdong&pwd=123456'
 * let params = getParams(url)
 * let pwd = params.pwd
 */
function getParams(url){
    let params = {}
    if(url){
        url.slice(1).split('&').forEach(item => {
            let arr = item.split('=')
            params[arr[0]] = arr[1]
        })
    }
    return params
}


/**
 * 获取设备类型
 * 使用
 * let isWeiXin = device().isWeixin
 */
function device(){
    let ua = navigator.userAgent
    return {
        isChrome: ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
        isAndroid: ua.match(/(Android);?[\s/]+([\d.]+)?/),
        isIphone: ua.indexOf('iPhone') != -1,
        isWeixin: ua.match(/MicroMessenger/i),
        isTraining: ua.match(/training/i)
    }
}

/**
 * @description 去除前后空格
 * @param {String} 值
 * @return {String}
 */
function trim(val){
    return val.replace(/(^\s*)|(\s*$)/g,'')
}

