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
    let adaptor = configs.adaptor(configs)
    return adaptor
  }
}

export default Kxios
