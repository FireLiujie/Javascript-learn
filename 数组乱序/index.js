let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function shuffle(arr) {
    let m = arr.length
    while (m > 1) {
        let index = parseInt(Math.random() * m--);
        [arr[index],arr[m]] = [arr[m],arr[index]]
    }
    return arr
}

let res =  shuffle(arr)
console.log(res)
