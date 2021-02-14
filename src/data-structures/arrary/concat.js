const zero = 0;
const right = [1, 2, 3];
const left = [-3, -2, -1];

let nums = left.concat(zero, right);
console.log(nums); // [-3, -2, -1, 0,1,  2,  3]
console.log(left); // [-3, -2, -1]
