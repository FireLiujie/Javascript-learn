import { deepCopy, mergeConfig } from './utils'
import InterceptorsManage from './interceptorsManage'

class Kxios {
  constructor(config) {
    this.defaults = deepCopy(config)
    this.interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage()
    }
  }
  get(url, config) {
    // 把get传入的配置与对象默认配置进行整合
    config.url = url
    let configs = mergeConfig(this.defaults, config)
    console.log(configs)
    // config.url = url
    // console.log(this.defaults)

    let promise = Promise.resolve(configs)
    this.interceptors.request.handlers.forEach(handler => {
      promise = promise.then(handler.resolvedHandler, handler.rejectedHandler)
    })
    promise = promise.then(this.dispatch, undefined)
    this.interceptors.response.handlers.forEach(handler => {
      promise = promise.then(handler.resolvedHandler, handler.rejectedHandler)
    })
    return promise
  }

  dispatch(configs) {
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
      //   xhr.open('get', url, true)
      xhr.send()
    })
  }
}

export default Kxios
