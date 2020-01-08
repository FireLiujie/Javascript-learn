class Mvue {
  constructor(options) {
    this.$options = options
    this._data = options.data
    this.observer(this._data)
    this.compile()
  }
  compile() {
    let eles = document.querySelector(this.$options.el)
    this.nodeCompile(eles)
  }
  nodeCompile(eles) {
    let childNodes = eles.childNodes
    childNodes.forEach(node => {
      if (node.nodeType == 3) {
        // 文本
        let reg = /\{\{\s*(\S+)\s*\}\}/g
        let test = reg.test(node.textContent)
        if (test) {
          node.textContent = this._data[RegExp.$1]
          new Watcher(this, RegExp.$1, newValue => {
            node.textContent = newValue
          })
        }
      } else if (node.nodeType == 1) {
        // 节点
        let attrs = node.attributes
        Array.from(attrs).forEach(attr => {
          let attrName = attr.name
          let attrValue = attr.value
          if (attrName.indexOf('m-') == 0) {
            attrName = attrName.substr(2)
            if (attrName == 'model') {
              node.value = this._data[attrValue]
              node.addEventListener('input', e => {
                this._data[attrValue] = e.target.value
              })
              new Watcher(this, attrValue, newValue => {
                node.value = newValue
              })
            }
          }
        })
      }
      if (node.childNodes.length > 0) {
        this.nodeCompile(node)
      }
    })
  }
  observer(data) {
    Object.keys(data).forEach(key => {
      let value = data[key]
      let dep = new Dep()
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target)
          }
          return value
        },
        set(newValue) {
          value = newValue
          dep.publish(newValue)
        }
      })
    })
  }
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  publish(newValue) {
    this.subs.forEach(v => {
      v.update(newValue)
    })
  }
}

class Watcher {
  constructor(vm, exp, cb) {
    Dep.target = this
    vm._data[exp]
    this.cb = cb
    Dep.target = null
  }
  update(newValue) {
    this.cb(newValue)
  }
}
