/**
 * 获取 url 后面的参数方法
 * @param {*} name 想要获取的参数名称
 * 使用
 * let url = '?username=zhangdong&pwd=123456'
 * let params = getParams(url)
 * let pwd = params.pwd
 */
function getParams(url) {
  let params = {};
  if (url) {
    url
      .slice(1)
      .split("&")
      .forEach(item => {
        let arr = item.split("=");
        params[arr[0]] = arr[1];
      });
  }
  return params;
}

/**
 * 获取设备类型
 * 使用
 * let isWeiXin = device().isWeixin
 */
function device() {
  let ua = navigator.userAgent;
  return {
    isChrome: ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
    isAndroid: ua.match(/(Android);?[\s/]+([\d.]+)?/),
    isIphone: ua.indexOf("iPhone") != -1,
    isWeixin: ua.match(/MicroMessenger/i),
    isTraining: ua.match(/training/i)
  };
}

/**
 * @description 去除前后空格
 * @param {String} 值
 * @return {String}
 */
<<<<<<< HEAD
function trim(val){
    return val.replace(/(^\s*)|(\s*$)/g,'')
}

=======
function trim(val) {
  return val.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @description 将图片转换为Base64
 */
function getImgToBase64(url, callback) {
  var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
    canvas = null;
  };
  img.src = url;
}

/**
 * 将base64转换为文件
 */
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
>>>>>>> 0ed774b2ffaab907758da8e3fa0e694eec4d1a7f
