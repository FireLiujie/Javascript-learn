export default class InterceptorsManage {
  constructor() {
    this.handlers = []
  }
  use(resolvedHandler, rejectedHandler) {
    this.handlers.push({
      resolvedHandler,
      rejectedHandler
    })
  }
}
