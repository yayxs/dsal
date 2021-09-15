// String 字符串 字符串序列

/**
 * find a char
 */
const str = 'this is str';

// console.log(str.at());
console.log(str.charAt(1));

/**
 * concat not change origin
 */
const s1 = 'hello';
const s2 = 'world';
const s3 = ''.concat(s1, s2, '!');

console.log(s1);
console.log(s2);
console.log(s3);

/**
 * judge str end
 * @returns {boolean}
 */

const test = 'Test';
console.log(test.endsWith(' '));

/**
 * length
 * @returns {number}
 */
const s = 'leg';
console.log(s.length);

/**
 * is includes
 */
console.log('Test_str'.includes('Test'));
console.log('Test_str'.indexOf('12')); // -1 没有找到

/**
 * match
 * @param regex
 */
const str = 'tEst';
console.log(str.match(/[A-Z]/g));
console.log(str.match());

/**
 * search
 * @param regex
 */

const str = 'search';
console.log(str.search('ch'));
/**
 * String.prototype.repeat()
 */
const str = '123';
// console.log(str.repeat(0));
// console.log(str.repeat(1));
console.log(str.repeat(2));

/**
 * replace not change origin
 */

const str = 'tesg-test-';

console.log(str.replace('-', ''));
console.log(str);

console.log(str.replaceAll('-', ''));

/**
 * split not change origin
 * @returns {Array}
 */

let str = 'split sp';
console.log(str.split('i'));
console.log(str);

/**
 * slice not change origin [ 0,2 )
 */
let str = 'slice';
console.log(str.slice(0, 2));
console.log(str);

/**
 * substring not change origin [ 0,2 )
 */

let str = 'substring';

console.log(str.substring(0, 2));
console.log(str);

/**
 * toLocaleLowerCase
 */
let str = 'hello_aX_02';
console.log(str.toLocaleLowerCase());
console.log(str);
