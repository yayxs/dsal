/**
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同
 * 是否有重复的字符
 * @param {*} astr
 * @returns {boolean}
 */
function isUnique(astr) {
  return new Set(astr).size === astr.length;
}

let s1 = 'leetcode';
let s2 = 'abc';
console.log(isUnique(s1));
console.log(isUnique(s2));
