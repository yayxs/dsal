/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const diffs = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let key = diffs[target - nums[i]] // 有索引存在
    if (key !== undefined) {
      return [key, i]
    }
    diffs[nums[i]] = i
  }
}
// @lc code=end
const res = twoSum([2, 7, 11, 15], 9)
console.log(res)
