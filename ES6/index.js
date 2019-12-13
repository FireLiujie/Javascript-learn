let arr = [4, 6, 1, 89, 88, 23, 9, 54, 10]
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middleIndex = Math.floor(arr.length / 2)
  let middleItem = arr.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middleItem) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.log(left, right)
  return [...quickSort(left), middleItem, ...quickSort(right)]
}

// console.log(quickSort(arr))

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))
