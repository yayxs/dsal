/*
 * @Author: vast or yayxs
 * @Date: 2021-09-15 16:04:54
 * @Description:
 */
/**
 * 字符串
 * BF 算法 Brute Force
 * 手动实现 indexOf
 *
 * @param {*} haystack
 * @param {*} needle
 * @returns
 */
var strStr = function (haystack, needle) {
  let haystackLen = haystack.length;
  let needleLen = needle.length;
  let LengthDiffer = haystackLen - needleLen;
  // 主串长度 < 模式串
  if (haystackLen < needleLen) {
    return -1;
  }
  // 模式串为空
  if (needleLen === 0) {
    return 0;
  }
  // Loop 主串 发起点
  for (let i = 0; i < LengthDiffer; i++) {
    // 主串的first
    let j;
    for (j = 0; j < needleLen; j++) {
      // 子串首位
      let subFirst = needle[j];
      // 主串首位
      // let mainFirst =
    }
  }

  return -1;
};

console.log(strStr('hello', 'll'));
