class Kvue extends EventTarget {
  constructor(options) {
    super()
    this.options = options
    this.compile()
    this.observer(this.options.data)
  }
  compile() {
    let eles = document.querySelector(this.options.el)
    let childNodes = eles.childNodes
    this.compileNodes(childNodes)
  }
  compileNodes(childNodes) {
    childNodes.forEach(node => {
      if (node.nodeType == 1) {
        this.compileNodes(node.childNodes)
      } else if (node.nodeType == 3) {
        let reg = /\{\{\s*(\S+)\s*\}\}/g
        let textContent = node.textContent
        let test = reg.test(textContent)
        if (test) {
          let $1 = RegExp.$1
          node.textContent = textContent.replace(reg, this.options.data[$1])
          this.addEventListener($1, e => {
            console.log(e.detail)
            let newValue = e.detail
            let oldValue = this.options.data[$1]
            let reg = new RegExp(oldValue, 'g')
            node.textContent = node.textContent.replace(reg, newValue)
          })
        }
      }
    })
  }
  observer(data) {
    Object.keys(data).forEach(key => {
      this.defineReact(data, key, data[key])
    })
  }
  defineReact(data, key, value) {
    let _this = this
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        console.log('get')
        return value
      },
      set(newValue) {
        console.log('set')
        let event = new CustomEvent(key, { detail: newValue })
        _this.dispatchEvent(event)
        value = newValue
      }
    })
  }
}
