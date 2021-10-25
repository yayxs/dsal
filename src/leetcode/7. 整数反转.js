/**
 * -231 <= x <= 231 - 1
 * const test = -123450; // expected output: 54321

const x = 123; // expected output: 321

const y = -123; // expected output: -321

const z = 120; // expected output: 21

const o = 0; // expected output: 0

 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   // if x === -123450
//   // Math.pow docs:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
//   const max = Math.pow(2, 31) - 1; // 2147483647
//   const min = -max - 1; // -2147483648
//   // Declare definition variables
//   let result = 0;
//   // 边界处理 大于最大值或者小于最小值
//   if (x > max || x < min) {
//     console.log('--');
//     return 0;
//     // stop
//   }
//   let xString = x.toString(); // '-123450'
//   let xArray = xString.split(''); // ['-','1','2','3','4','5','0']
//   let arrayX = xArray.reverse(); // ['0','5','4','3','2','1','-']
//   let s = arrayX.join(''); // '054321-'
//   // parseInt docs:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//   result = parseInt(s);
//   // 带负号的再加上负号
//   if (x < 0) {
//     result = -result;
//   }
//   return result;
// };

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;
    x = ~~(x / 10);
  }
  return result;
};

console.log(reverse(1534236469)); // -54321
