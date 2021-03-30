let arr = [1,2,1,1,1,3,2,3]

// 去重
// 方法一：
// let list = [...new Set(arr)]
// console.log(list)


// 方法二：
function removeDup(arr) {
    let list = []
    let obj = {}

    arr.forEach(item => {
        if (!obj[item]) {
            list.push(item)
            obj[item] = true
        }
    })

    return list
}


// let list = removeDup(arr)
// console.log(list)

// 方法三：

console.log(Array.from(new Set(arr))) 