/**
 * 字符串
 * 哈希表
 * 205. 同构字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
