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
    handle(this._resolve.bind(this), this._reject.bind(this))
  }
  _resolve() {
    window.addEventListener('message', _ => {
      if (this.status !== MPromise.PENDING) return
      this.status = MPromise.RESOLVED
      let handle
      if ((handle = this.resolvedQueue.shift())) {
        handle()
      }
    })
    window.postMessage('')
  }
  _reject() {
    window.addEventListener('message', _ => {
      if (this.status !== MPromise.PENDING) return
      this.status = MPromise.REJECTED
      let handle
      if ((handle = this.rejectedQueue.shift())) {
        handle()
      }
    })
  }
  then(resolveHandler, rejectedHandler) {
    this.resolvedQueue.push(resolveHandler)
    this.rejectedQueue.push(rejectedHandler)
  }
}
