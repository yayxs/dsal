/**
 * 哈希表
 * 哈希映射
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 判断长度
  let sLen = s.length;
  let tLen = t.length;
  if (sLen !== tLen) return false;

  const hash = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0); // 97
  // 所有s 加1
  for (let i = 0; i < sLen; i++) {
    let codeDiffer = s.charCodeAt(i) - aCode;
    console.log(codeDiffer);
    // 对应位置 +1
    hash[codeDiffer]++;
  }
  // 所有t 相减
  for (let i = 0; i < tLen; i++) {
    let codeDiffer = t.charCodeAt(i) - aCode;
    if (hash[codeDiffer] == 0) return false;
    hash[codeDiffer]--;
  }
  for (const v of hash) {
    if (v != 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
