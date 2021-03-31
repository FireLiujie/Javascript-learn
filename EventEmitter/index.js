class MyEventEmitter{
    constructor() {
        this.events = {}
    }

    on(name, cb) {
        if (!this.events[name]) {
            this.events[name] = [cb]
        } else {
            this.events[name].push(cb)
        }
    }

    emit(name,...args) {
        this.events[name].forEach(cb => {
            cb.call(this,...args)
        })
    }

    off(name, cb) {
        if (this.events[name]) {
            this.events[name] = this.events[name].filter(fn => {
                return fn != cb
            })
        }
    }
    
    once(name, cb) {
        let onlyOnce = function (...args) {
            console.log(args)
            cb.call(this,...args)
            this.off(name,onlyOnce)
        }
        this.on(name, onlyOnce)
        return this
    }
    
}

let emitter = new MyEventEmitter()

emitter.on('event1', function (arg1,arg2) {
    console.log(arg1,arg2)
})

emitter.on('event1', function (arg1,arg2) {
    console.log(arg1+arg2)
})

emitter.once('event2', function () {
    console.log(arguments)
})


emitter.emit('event2',1,3)
emitter.emit('event2',1,3)

// emitter.emit('event1', 1, 2)
// emitter.off('event1')

// emitter.emit('event1', 2,3)


