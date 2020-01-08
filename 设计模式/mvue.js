class Mvue {
  constructor(options) {
    this.$options = options
    this._data = options.data
    this.compile()
  }
  compile() {
    let eles = document.querySelector(this.$options.el)
    let childNodes = eles.childNodes
    console.log(childNodes)
    childNodes.forEach(node => {
      if (node.nodeType == 3) {
        console.log(node)
      }
    })
  }
  nodeCompile() {}
}
