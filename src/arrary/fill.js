let res = new Array(100000).fill(10);
console.log(res);
var arr = new Array(100000).fill(100);
console.time("timer");
arr[0];
console.timeEnd("timeEnd");

console.time("timer");
arr[100000 - 1];
console.timeEnd("timeEnd");
