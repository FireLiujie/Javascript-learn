/**
 * location--BOM对象之一，既是window对象的属性，又是document对象的属性
 * 即：window.location === document.location 结果为true
 */

/**
 * 功能
 * 提供与当前窗口中加载的文档有关的信息
 * 提供导航功能
 */

/**
 * 属性说明
 * hash         返回URL中#号后的多个字符，如果URL中不包含散列，则返回空字符串
 * host         返回服务器名称+端口号
 * hostname     返回不带端口号的服务器名称
 * href         返回当前加载页面的完整URL（location.toString() === location.href 结果为true）
 * pathname     返回URL中的目录+文件名
 * protocol     返回使用的协议http or https
 * search       返回URL中的查询字符串，这个字符串以问号开头
 * origin       返回URL协议+服务器名称+端口号（location.origin === location.protocol + '//' +location.host）
 */

/**
 * origin的兼容性说明
 * origin不兼容IE8，所以要使用这个属性就要进行兼容性处理
 */
var baseUrl;
if (typeof location.origin === "undefined") {
  baseUrl = location.protocol + "//" + location.host;
} else {
  baseUrl = window.location.origin;
}

/**
 * 方法说明
 * assign()     跳转链接，立即打开新的URL并在浏览器的历史记录中生成一条记录，回退可返回
 * replace()    跳转链接，立即打开新的URL，不会再历史记录中生成一条记录，回退不可返回
 * reload()     重新加载当前显示的页面：参数：无--就会使用最有效的方式重新加载页面，可能从浏览器缓存中重新加载。
 *                                    参数：true--那么就会强制从服务器重新加载
 *
 * 注意：如果是修改window.location和location.href，也会以修改的值去调用assign()，效果是完全一样的。
 */
