/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;

  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    let midLessThanTarget = nums[mid] < target;
    if (midLessThanTarget) {
      // 比目标值小
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
