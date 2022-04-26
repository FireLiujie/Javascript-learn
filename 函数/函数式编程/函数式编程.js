// 要求：对一个数组每项加1

// 初级程序员
let arr = [1, 2, 3, 4];
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] + 1);
}
console.log("result", result);


/**
 * 函数式编程是一种编程范式，是一种构建计算机程序结构和元素的风格，它把计算看作是对数据函数的评估，避免了状态的变化和数据的可变
 * 将我们的程序分解为一些更可复用，更可靠且更易于理解的部分，然后在将他们组合起来，形成一个更易推理的程序整体
 */

const newArr = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result
};

const add = (item) => {
  return item + 1;
};

const multi = item =>{
    return item * 5
}

let rs1 = newArr(arr,add)
let rs2 = newArr(arr,multi)

console.log('rs1',rs1);
console.log('rs2',rs2);