class Kxios {
  get(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.onload = function() {
        resolve(xhr.responseText)
      }
      xhr.open('get', url, true)
      xhr.send()
    })
  }
}

let kxios = new Kxios()

export default kxios
