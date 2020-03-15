## CSRF 攻击

CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One click Attach”或者 Session Riding，通常缩写为 CSRF 或者 XSRF，是一种对网站的恶意利用

### CSRF 如何攻击

1、浏览并登陆信任网站 A  
2、验证通过，在用户处 C 产生 A 的 cookie  
3、用户在没有登出 A 网站的情况下，访问危险网站 B  
4、B 要求访问第三方站点 A，发出一个请求(request)  
5、根据 B 在 4 的请求，浏览器带着 2 处产生的 Cookie 访问 A  
6、A 不知道 5 中的请求是 C 发出的还是 B 发出的，由于浏览器会自动带上用户 C 的 cookie，所以 A 会根据用户的权限处理 5 的请求，这样 B 就达到了模拟用户操作的目的
