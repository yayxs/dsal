/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1 // k 指针指向最后一个元素
  let i = m - 1
  let j = n - 1

  while (i >= 0 && j >= 0) {
    // 取较大的值
    let iVal = nums1[i]
    let jVal = nums2[j]
    let kVal = nums1[k]
    if (iVal >= jVal) {
      kVal = iVal
      i--
      k--
    } else {
      kVal = jVal
      j--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
}
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
