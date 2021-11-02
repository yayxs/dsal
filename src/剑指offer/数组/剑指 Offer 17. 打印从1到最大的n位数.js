/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 暴力 for 循环  位运算  DFS
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let ans = [];
  let len = Math.pow(10, n);
  for (let i = 0; i < len; i++) {
    ans.push(i);
  }
  return ans;
};

console.log(printNumbers(3));
