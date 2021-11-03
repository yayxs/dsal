/**
 * @param {number[]} nums
 * @return {number}
 * [2, 3, 1, 0, 2, 5, 3]
 */
var findRepeatNumber = function (nums) {
  const mapper = new Map();
  let len = nums.length;

  for (let num of nums) {
    if (mapper.has(num)) {
      return num;
    } else {
      mapper.set(num, 1);
    }
  }
  return null;
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
