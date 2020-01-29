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
      if ((handle = this.resolvedQueue.shift())) {
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
      if ((handle = this.rejectedQueue.shift())) {
        handle(this.value)
      }
    })
    window.postMessage('')
  }
  then(resolveHandler, rejectedHandler) {
    return new MPromise((resolve, reject) => {
      function newResolveHandler(val) {
        let result = resolveHandler(val)
        if (result instanceof MPromise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      }
      function newRejectedHandler(err) {
        let result = rejectedHandler(err)
        reject(result)
      }
      this.resolvedQueue.push(newResolveHandler)
      this.rejectedQueue.push(newRejectedHandler)
    })
  }
}
