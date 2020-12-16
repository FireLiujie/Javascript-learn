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

