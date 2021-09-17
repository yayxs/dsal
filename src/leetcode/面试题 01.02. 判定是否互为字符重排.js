/**
 * 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  // length 不等直接false
  if (s1.length !== s2.length) return false;
  // 可以转换标记
  let can = true;
  // const s1Array = [...s1];
  // const s2Array = [...s2];
  // console.log(s1Array);
  for (let s1Char of s1) {
    if (s2.indexOf(s1Char) === -1) {
      // 有不一样的
      can = false;
      break;
    } else {
      s2 = s2.replace(s1Char, '');
    }
  }

  return can;
};

console.log(CheckPermutation('abc', 'cba'));
// console.log(CheckPermutation('abd', 'cba'));
