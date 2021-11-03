/**
 * 输入：s = "abaccdeff"
输出：'b'
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s === '') return ' ';
  const mapper = new Map();
  for (let char of s) {
    if (mapper.has(char)) {
      // 有的话+1
      mapper.set(char, mapper.get(char) + 1);
    } else {
      mapper.set(char, 1);
    }
  }

  console.log(mapper); // { 'a' => 2, 'b' => 1, 'c' => 2, 'd' => 1, 'e' => 1, 'f' => 2 }

  for (let char of mapper.keys()) {
    if (mapper.get(char) === 1) {
      return char;
    }
  }

  return ' ';
};

console.log(firstUniqChar('abaccdeff'));
