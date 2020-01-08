class Dep {
  constructor() {
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  publish() {
    this.subs.forEach(v => {
      v.update()
    })
  }
}

class Watcher {
  constructor() {}
  update() {
    console.log('我更新了')
  }
}

let dep = new Dep()
let watcher1 = new Watcher()
let watcher2 = new Watcher()
let watcher3 = new Watcher()
dep.addSub(watcher1)
dep.addSub(watcher2)
dep.addSub(watcher3)
dep.publish()
