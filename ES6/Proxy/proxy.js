let a = {}
let b = new Proxy(a, {
    get() {
        return 35
    }
})
console.log(b.x)