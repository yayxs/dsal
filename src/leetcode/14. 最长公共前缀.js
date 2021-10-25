/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * strs = ["flower","flow","flight"]
 * strs = ["dog","racecar","car"]
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let ans = strs[0]; // 默认就是第1项 ' f l o w e r '
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      // charAt find a char by index
      if (ans.charAt(j) !== strs[i].charAt(j)) break;
    }
    ans = ans.substring(0, j);
    if (ans === '') return '';
  }
  return ans;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
