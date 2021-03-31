Function.prototype.myCall = function (context) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`)
    }
    context.fn = this
    var arr = Array.prototype.slice.call(arguments,1)
    var result = context.fn(...arr)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`)
    }
    context.fn = this

    var arr = Array.prototype.slice.call(arguments,1)
    let result = context.fn(arr)

    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this != 'function') {
        return new TypeError(`${this} is not a function`)
    }
    return (...args) => {
        this.call(context,...args)
    }
}

let obj = {
    test: test,
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 4
    }
}

a = 3

function test(b,c) {
    console.log(this.a)
    // console.log(arr[0] + arr[1])
    console.log(b + c)
}

// test.myCall(obj,1,2)

let fn = test.myBind(global)
fn(2,3)