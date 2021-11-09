/**
 * 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let sLen = s.length,
    right = sLen - 1;
  let sArr = [...s];
  reverse(sArr, 0, right);
  // 反转单词
  let start = 0;
  for (let i = 0; i <= sArr.length; i++) {
    if (sArr[i] === ' ' || i === sArr.length) {
      reverse(sArr, start, i - 1);
      start = i + 1;
    }
  }
  return sArr.join('');
};

function reverse(sArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    // 交换
    [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
    left++;
    right--;
  }
}

console.log(reverseWords('  hello   world  '));
