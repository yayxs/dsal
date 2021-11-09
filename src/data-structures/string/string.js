/**
 * @description base
 * 语法 模板字面量 转义字符
 * 基本字符串 字符串对象
 */

let origin1 = '';
let origin2 = '\n';
console.log(typeof String(''));
console.log(typeof new String('')); // 'object'
console.log(typeof '');
console.log(new String('123').valueOf()); // '123'

/**
 * 增
 */
// 两个字符串拼接一起

let one = 'one';
let two = 'two';

console.log(one.concat('', two, '123')); // onetwo123
/**
 * 查
 */

// 找一个字符

let str = 'vast';

console.log(str.charAt(-1)); //
console.log(str.charAt(0)); // 'v' default
console.log(str.charAt(1)); // 's'
console.log(str.charAt(str.length - 1)); // 't'

// 找一个整数

let str = 'vast';

console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(0)); // 118
console.log(str.charCodeAt(1)); // 97
console.log(str.charCodeAt(str.length - 1)); // 116

// 查一查是否存在
let longStr = 'i am lang str.';
console.log(longStr.includes('i')); // true
console.log(longStr.includes('I')); // false
console.log(longStr.includes('  ')); // false

let str = 'hello';
console.log(str.includes('hello1')); // false

let str = 'aab';
console.log(str.indexOf('a')); // 0
console.log(str.indexOf('aa')); // 0
console.log(str.indexOf('ab')); // 1
console.log(str.indexOf('c')); // -1

// 查一查是否匹配

let str = '10,20,';

// console.log(str.match(//))

/**
 * 比
 */

/**
 * 判断
 */

// 以xx结束

let str = 'vast';
console.log(str.endsWith('')); // true
console.log(str.endsWith(' ')); // false
console.log(str.endsWith('t')); // true
console.log(str.endsWith('st')); // true
