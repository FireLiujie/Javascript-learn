/**
 * 纯函数：如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入的参数(相同的输入，必须得到相同的输出)
 */

const calculatePrice = (discount, price) => {
  return discount * price;
};
let result = calculatePrice(2, 10);
console.log("result", result);

// 非纯函数
const calculatePrice1 = (price, discount) => {
  let something = 0;
  const dt = new Date().getSeconds();
  console.log('dt',dt);
  something = dt * price * discount
  return something;
};
let rs1 = calculatePrice1(2, 10);
console.log("rs1", rs1);


