/**
 * @description 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s == null || s.length === 0) return 0;
  let ans = 0;
  let end = s.length - 1;
  for (let i = end; i >= 0; i--) {
    if (s.charAt(i) === ' ') {
      if (ans === 0) continue;
      break;
    }
    ans++;
  }
  return ans;
};
console.log(lengthOfLastWord('Hello World '));
