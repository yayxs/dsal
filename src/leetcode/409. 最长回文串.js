/**
 * 409. 最长回文串
 * dccaccd
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let setter = new Set();
  let ans = 0;
  let arr = s.split('');
  for (let val of arr) {
    if (!setter.has(val)) {
      // 没有值
      setter.add(val);
    } else {
      setter.delete(val);
      ans = ans + 2;
    }
  }
  // 判断集合的size
  let add = setter.size > 0 ? 1 : 0;
  ans = ans + add;
  return ans;
};

console.log(longestPalindrome('abccccdd'));

/**
 * dccaccd
 *  a b c c c c d d
 *   d    c c   a c c d
 */
