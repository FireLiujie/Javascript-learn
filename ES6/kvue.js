class Kvue {
  constructor(options) {
    this.options = options
    this.compile()
  }
  compile() {
    let eles = document.querySelector(this.options.el)
    let childNodes = eles.childNodes
    console.log(childNodes)
    childNodes.forEach(node => {
      //   console.log(node)
      if (node.nodeType == 1) {
        console.log('节点')
      } else if (node.nodeType == 3) {
        console.log('文本')
        let reg = /\{\{\s*(\S+)\s*\}\}/g
        let textContent = node.textContent
        let test = reg.test(textContent)
        if (test) {
          let $1 = RegExp.$1
          node.textContent = textContent.replace(reg, this.options.data[$1])
        }
      }
    })
  }
}
