/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 * 负数 0 10的倍数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = new String(x);
  let leftIndex = 0,
    rightIndex = str.length - 1;
  // 是回文
  while (leftIndex < rightIndex) {
    if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};
console.log(isPalindrome(123));
