获取 url 后面的参数方法
var search = window.location.search; //获取 location 的 search 属性，保存在 search 中
var params = {}; //创建空对象 params
if(search != "") { //如果 search 不是空字符串
search.slice(1).split("&").forEach( //?username=zhangdong&pwd=123456;//search 去开头?，按&切割为数组，forEach
function(val) {
var arr = val.split("="); //将当前元素值按=切割，保存在 arr 中
params[arr[0]] = arr[1]; //向 params 中添加一个元素,属性名为 arr[0],值为 arr[1]
}
);
}
var \_id = params.id;
