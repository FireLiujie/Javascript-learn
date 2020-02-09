export default configs => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
      resolve({
        statusCode: xhr.status,
        statusText: xhr.statusText,
        data: xhr.responseText
      })
    }
    xhr.open('get', configs.baseURL + configs.url, true)
    xhr.send()
  })
}
