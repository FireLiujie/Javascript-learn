class MPromise {
  static PENDING = 'PENDING'
  static RESOLVED = 'RESOLVED'
  static REJECTED = 'REJECTED'
  constructor(handle) {
    if (typeof handle !== 'function') {
      throw new TypeError(
        'Promise resolver undefined is not a function at new Promise '
      )
    }
    this.status = MPromise.PENDING
    this.resolvedQueue = []
    this.rejectedQueue = []
    this.value = ''
    handle(this._resolve.bind(this), this._reject.bind(this))
  }
  _resolve(val) {
    window.addEventListener('message', _ => {
      if (this.status !== MPromise.PENDING) return
      this.status = MPromise.RESOLVED
      this.value = val
      let handle
      while ((handle = this.resolvedQueue.shift())) {
        handle(this.value)
      }
    })
    window.postMessage('')
  }
  _reject(val) {
    window.addEventListener('message', _ => {
      if (this.status !== MPromise.PENDING) return
      this.status = MPromise.REJECTED
      this.value = val
      let handle
      while ((handle = this.rejectedQueue.shift())) {
        handle(this.value)
      }
    })
    window.postMessage('')
  }
  then(resolveHandler, rejectedHandler) {
    return new MPromise((resolve, reject) => {
      function newResolveHandler(val) {
        if (typeof resolveHandler === 'function') {
          let result = resolveHandler(val)
          if (result instanceof MPromise) {
            result.then(resolve, reject)
          } else {
            console.log(result)
            resolve(result)
          }
        } else {
          // resolve(val)
        }
      }
      function newRejectedHandler(err) {
        if (typeof rejectedHandler === 'function') {
          let result = rejectedHandler(err)
          if (result instanceof MPromise) {
            result.then(resolve, reject)
          } else {
            reject(result)
          }
        } else {
          reject(err)
        }
      }
      this.resolvedQueue.push(newResolveHandler)
      this.rejectedQueue.push(newRejectedHandler)
    })
  }
  catch(rejectedHandler) {
    return this.then(undefined, rejectedHandler)
  }
}
