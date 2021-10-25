/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2] [ 0,0,1,1,2,2,3,4,4,5]
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let p1 = 0;
  let p2 = 0;
  let numsLen = nums.length;
  while (p2 < numsLen) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
      let c = nums;
    }
    p2++;
  }

  return p1 + 1;
};

const res = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log('ans', res);
