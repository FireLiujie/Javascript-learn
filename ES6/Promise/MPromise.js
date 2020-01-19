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
    handle(this._resolve.bind(this), this._reject.bind(this))
  }
  _resolve() {
    if (this.status !== MPromise.PENDING) return
    this.status = MPromise.RESOLVED
    console.log('resolve')
  }
  _reject() {
    if (this.status !== MPromise.PENDING) return
    this.status = MPromise.REJECTED
    console.log('reject')
  }
  then() {}
}
