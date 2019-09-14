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
