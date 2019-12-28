class Lvue {
  constructor(options) {
    this.options = options
    this.compile()
  }
  compile() {
    console.log(111)
    let ele = document.querySelector(this.options.el)
    let childNodes = ele.childNodes
    let reg = /\{\{\s*(\S+)\s*\}\}/g
    console.log(childNodes)
    childNodes.forEach(node => {
      console.log(node)
      if (node.nodeType == 3) {
        console.log(node.textContent)
        let test = reg.test(node.textContent)
        if (test) {
          let $1 = RegExp.$1
          node.textContent = node.textContent.replace(
            reg,
            this.options.data[$1]
          )
        }
        console.log(test)
      }
    })
  }
}
