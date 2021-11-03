/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）
 * @param {number} n - a positive integer
 * @return {number}
 * 暴力 位运算 分治 无符号右移 n & (n - 1)
 */
const hammingWeight = (n) => {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
console.log(hammingWeight(11));
console.log(hammingWeight(128));
