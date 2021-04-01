function Father(name,age){
    this.name = name
    this.age = age
}

Father.prototype.sayHi = function () {
    console.log(`hello! ${this.name}, your age is ${this.age}?`)
}

function Son(name,age,sex) {
    Father.call(this, name, age)
    this.sex = sex
}

Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

let father = new Father('张三', 40)
father.sayHi()

let son = new Son('张小三', 15)
son.sayHi()

