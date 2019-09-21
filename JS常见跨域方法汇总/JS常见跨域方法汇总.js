/**
 * 一、什么是跨域？
 * 1、什么是同源策略及其限制内容？
 *  所谓同源是指“协议+域名+端口”三者相同，即便两个不同的域名指向同一个ip地址，也非同源
 * 
 * 一个域名地址的组成：
 * http://  www      .   abc.com     :   8080    /   scripts/jquery.js
 * 协议     子域名        主域名           端口号      请求资源地址
 * 
 * 同源策略限制内容有：
 * cookie、localStorage、indexDB等存储性内容
 * DOM 节点
 * AJAX请求发送后，结果被浏览器拦截了
 * 
 * 但是有三个标签是允许跨域加载资源：
 * <img src=xxx>
 * <link href=xxx>
 * <script src=xxx>
 */