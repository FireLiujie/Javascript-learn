let arr = [1, [2], [[3], [4, [5]]], 6]
let arr1 = [1,[2],[3]]

function flat(arr) {
    let list = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            list = [...list,...flat(item)]
        } else {
            list.push(item)
        }
    })
    return list
}

// let list = flat(arr)
// console.log(list)

function flatByDeep(arr, deep) {
    let list = []
    arr.forEach(item => {
        if (Array.isArray(item) && deep >= 1) {
            list = list.concat(flatByDeep(item,deep - 1))
        } else {
            list.push(item)
        }
    })
    return list
}

let list1 = flatByDeep(arr,1)
console.log(list1)

console.log(arr.flat()) 