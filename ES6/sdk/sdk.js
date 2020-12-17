; (function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory()
    } else {
        if (typeof define === 'function' && (define.amd || define.cmd)) {
            define(factory)
        } else {
            global.fire = factory()
        }
    }
})(typeof window !== 'undefined' ? window : this, function () {
    var version = '1.0.0'
    var fire = function () {
        return new fire.fn.init()
    }

    fire.fn = fire.prototype = {
        init: function () {
            return this
        },
        version,
        fir: {
            tel: function () {
            }
        }
    }
    fire.fn.init.prototype = fire.fn
    return fire()
})


function P() {
    // let p1 = {}
    // p1.prototype = P.prototype
    // return p1
}
let p = new P()



console.log(P === p.constructor) // true
console.log(P === P.prototype.constructor) // true
console.log(p.constructor === P) // 
console.log(P.prototype)
console.log(p.constructor === P.prototype.constructor)
console.log(P.constructor === Function)

