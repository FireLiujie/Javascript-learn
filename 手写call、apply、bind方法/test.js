Function.prototype.myCall = function (context) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`)
    }
    if (typeof context != 'object') {
        context = global || window
    }

    context.fn = this
    ;[, ...args] = [...arguments]
    let result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`)
    }
    if (typeof context != 'object') {
        context = global || window
    }

    context.fn = this
    ;[, ...args] = [...arguments]
    let result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`)
    }
    if (typeof context != 'object') {
        context = global || window
    }
    context.fn = this
    return (...arguments) => {
        context.fn(...arguments)
    }
}

let obj = {
    a: 1,
    b: test,
    c: {
        d: 2
    }
}

a = 5

function test(b,c) {
    console.log(this.a)
    console.log(b,c)
}

// test.myApply(obj,[7,8])

let fn = test.myBind()
let rs = fn(1, 2)