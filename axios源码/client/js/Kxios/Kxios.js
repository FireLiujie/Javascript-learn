import { deepCopy, mergeConfig } from './utils'

class Kxios {
  constructor(config) {
    this.defaults = deepCopy(config)
  }
  get(url, config) {
    // 把get传入的配置与对象默认配置进行整合
    let configs = mergeConfig(this.defaults, config)
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.onload = function() {
        resolve(xhr.responseText)
      }
      xhr.open('get', configs.baseURL + url, true)
      //   xhr.open('get', url, true)
      xhr.send()
    })
  }
}

export default Kxios
