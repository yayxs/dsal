/**
 * 双指针 左指针找偶数 右指针找奇数
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    // 奇数
    while (left < right && nums[left] % 2 === 1) left++;
    while (left < right && nums[right] % 2 === 0) right--;

    // temp = nums[left]
    //     nums[left] = nums[right]
    //     nums[right] = temp
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }

  return nums;
};

console.log(exchange([1, 2, 3, 4]));
