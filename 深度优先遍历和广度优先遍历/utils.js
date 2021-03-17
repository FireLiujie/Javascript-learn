let _toString = Object.prototype.toString
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    boolean: 'Boolean',
    number: 'Number'
}

function getType(obj){
    return _toString.call(obj).slice(8,-1)
}

function isTypeOf(obj,type) {
    return map[type] && map[type] === getType(obj)
}

function getEmpty(o) {
    if (Object.prototype.toString.call(o) === '[object Object]') {
        return {}
    }
    if (Object.prototype.toString.call(o) === '[object Array]') {
        return []
    }
    return o
}


module.exports = { getType, isTypeOf, getEmpty }

async function async1() {	
    console.log('async1 start');	
    await async2();	
    console.log('asnyc1 end');
}
async function async2() {	
    console.log('async2');
}
console.log('script start');
setTimeout(() => {	
    console.log('setTimeOut');
}, 0);
async1();
new Promise(function (reslove) {	
    console.log('promise1');	
    reslove();}).then(function () {	
        console.log('promise2');
})
console.log('script end');

// script start  async1 start async2 promise1 script end asnyc1 end promise2 setTimeOut

