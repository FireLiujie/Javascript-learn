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
    handle(this._resolve, this, this._reject)
  }
  _resolve() {
    console.log('resolve')
  }
  _reject() {
    console.log('reject')
  }
}
