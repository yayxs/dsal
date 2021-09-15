/**
 *
 * indexOf
 * find needle location in haystack
 * if not exist return -1
 * if '' return 0
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
function strStr(haystack, needle) {
  // console.log(haystack.indexOf(needle));
  if (typeof haystack === 'string' && typeof needle === 'string') {
    const haystackLength = haystack.length,
      needleLength = needle.length;
    if (needleLength === 0) {
      return 0;
    }
    ('h e l l o');
    let pHaystack = 0;
    // while(  pHaystack < )
  }
}

let s1 = 'hello';
let s2 = 'll';

let s3 = '';
let s4 = '';

let s5 = 'aaaaa';
let s6 = 'bba';

strStr(s1, s2);
strStr(s5, s6);
strStr(s3, s4);
