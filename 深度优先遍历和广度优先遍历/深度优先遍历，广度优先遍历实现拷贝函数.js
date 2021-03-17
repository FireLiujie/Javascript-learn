let utils = require('./utils')

function dfsDeepClone(obj, visitedArr){ // obj 原始对象， visitedArr代表已经拷贝的对象，防止循环拷贝
    let _obj = {} // 要返回的拷贝后对象

    if (utils.isTypeOf(obj, 'array') || utils.isTypeOf(obj, 'object')) {
        let index = visitedArr.findIndex(obj)
        if (index != -1) {
            _obj = visitedArr[index]
        } else {
            _obj = utils.isTypeOf(obj, 'array')? []: {}
            for (let item in obj) {
                _obj[item] = dfsDeepClone(obj[item])
            }
        }
    } else if (utils.isTypeOf(obj,'function')) {
        _obj = eval('(' + obj.toString() + ')') // 如果是函数就返回函数字符串
    } else {
        _obj = obj
    }

    return _obj
}

function a() {
    console.log(111)
}


let b = dfsDeepClone(a)
console.log(b)