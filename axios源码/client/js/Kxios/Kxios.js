import { deepCopy } from './utils'

class Kxios {
  constructor(config) {
    this.defaults = deepCopy(config)
  }
  get(url, config) {
    // 把get传入的配置与对象默认配置进行整合
    // this.defaults.url = url
    // this.defaults = Object.assign(this.defaults, config)
    // let configs =
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.onload = function() {
        resolve(xhr.responseText)
      }
      //   xhr.open('get', this.defaults.baseURL + this.defaults.url, true)
      xhr.open('get', url, true)
      xhr.send()
    })
  }
}

export default Kxios
