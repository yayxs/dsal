let s1 = 'the sky is blue';

let s2 = '  hello world!  ';

let s3 = 'a good   example';

function reverseW(s) {
  if (typeof s !== 'string') {
    return '';
  }
  // 1、左右两端的空格去除
  // 2、所有的空格 变为一个空格
  // 3、通过空格变成数组
  // 4、数组反转
  // 5、通过空格拼接
  console.log(s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' '));
}
reverseW(s1);
reverseW(s2);
reverseW(s3);

let s1 = 'the sky is blue';

let s2 = '  hello world!  ';

let s3 = 'a good   example';
/**
 * use 双端队列
 * @param {*} s
 * @returns {string}
 */
function reverseWords(s) {
  if (typeof s !== 'string') {
    return '';
  }
  // 字符串长度
  let strLength = s.length;
  let left = 0;
  let right = strLength - 1;

  let queue = [];
  let word = '';
  while (s.charAt(left) === ' ') left++;
  while (s.charAt(right) === ' ') right--;
  while (left <= right) {
    let char = s.charAt(left);
    if (char === ' ' && word) {
      queue.unshift(word);
      word = '';
    } else if (char !== '') {
      word = word + char;
    }
    left++;
  }
  queue.unshift(word);
  console.log(queue.join(' '));
}
reverseWords(s1);
reverseWords(s2);
reverseWords(s3);
