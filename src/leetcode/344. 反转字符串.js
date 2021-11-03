/**
 * 简单
 * 字符串
 * 双指针
 * 就地修改
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  if (len === 0) return;
  let left = 0,
    right = len - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(['a', 'b', 'c']));
