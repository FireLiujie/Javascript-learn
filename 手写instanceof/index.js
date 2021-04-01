/**
 * instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */


Object.prototype.myInstanceof = function (left, right) {
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto == null) {
            return false
        }
        if (proto == prototype) {
            return true
        }
        proto = proto.__proto__
    }
}

class D{
    constructor(){}
}
let d = new D()
console.log(myInstanceof(d,Object)) 