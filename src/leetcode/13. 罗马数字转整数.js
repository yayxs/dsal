/**
 * I 1
 * V 5
 * X 10
 * L 50
 * C 100
 * D 500
 * M 1000
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const m = new Map();
  m.set('I', 1);
  m.set('V', 5);
  m.set('X', 10);
  m.set('L', 50);
  m.set('C', 100);
  m.set('D', 500);
  m.set('M', 1000);
  let ans = 0;
  const len = s.length;
};
