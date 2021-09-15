// use stack ds(data-structures)
// use js map type

const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';

function isValid(s) {
  // 成对出现 字符串长度为偶数 否则直接false
  const sl = s.length;
  if (sl % 2 === 1) {
    return false;
  }
  // 栈
  const stack = [];
  // map存储对应值 左括号对应右括号的映射
  const mapper = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  /**
   * )
   * (
   * [
   * {
   */
  for (let ch of s) {
    // ( ) [ ] {  }
    // 通过右半边获取左半边
    // console.log(mapper.get(ch)); // undefined (
    if (mapper.get(ch)) {
      if (stack[stack.length - 1] !== mapper.get(ch)) {
        return false;
      } else {
        // 成对直接抵消
        stack.pop();
      }
    } else {
      // 左半部分全部入栈
      stack.push(ch);
    }
  }
  return !stack.length;
}

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
