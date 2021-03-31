let arr = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.filter = function (fn) {
    if (typeof fn != 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this
    let result = []
    arr.forEach((item,index) => {
        let temp = fn.call(this,item,index)
        if (temp) {
            result.push(item)
        }
    })
    return result
}

let list = arr.filter((item,index) => {
    return item > 2
})

console.log(list)

