// use stack
// map

const s1 = '()';
const s2 = '()[]{}';
const s3 = '(]';

function isValid(s) {
  // 校验标记
  let valid = true;
  // 栈
  const stack = [];
  // map存储对应值 左括号对应右括号的映射
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for (let i in s) {
    // 值
    const v = mapper[i];
    // 左半部分
    const leftSets = ['(', '{', '['];
    if (leftSets.indexOf(v) > -1) {
      // 左半部分入栈
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (i !== peak) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
