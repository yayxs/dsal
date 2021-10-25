/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 * @param {number[]} nums [1,3,5,6]
 * @param {number} target 0 ||
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // 目标值在所有元素之前
    // 目标值等于数组中的元素

    if (target < num || target === num) {
      return i;
    }
    return nums.length;
  }
};
