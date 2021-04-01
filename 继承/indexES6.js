// ES6

class Father{
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    publish() {
        console.log(this.name,this.age)
    }
}

class Son extends Father{
    constructor(name,age,sex) {
        super(name, age)
        this.sex = sex
    }

    other() {
        console.log(this.name,this.age,this.sex)
    }
}

let father = new Father('张三', 40)
father.publish()

let son = new Son('张小三', 15,'男')
son.publish()
son.other()