/**
 * @param {number} n
 * @return {number}
 * 1+2+3+……n
 *
 */
var sumNums = function (n) {
  let ans = (n * (n + 1)) / 2;
  return ans;
};

console.log(sumNums(5));
