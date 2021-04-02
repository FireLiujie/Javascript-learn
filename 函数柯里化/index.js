function add(a,b,c,d) {
    return a + b + c + d
}

console.log(add.length)

function currying(fn, ...args) {
    if (fn.length <= args.length) {
        return fn(...args)
    } 
    return function (...args1) {
        console.log(args)
        return currying(fn,...args,...args1)
    }
}

// let rs1 = add(1,2,3)
// console.log(rs1)

let curryingAdd = currying(add)

let rs =  curryingAdd(1)(2,3)(4)
console.log(rs)