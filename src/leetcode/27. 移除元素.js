/**
 * @doc
 * @param {number[]} nums [3,2,2,3]
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let ans = 0
  for(let i = 0;i<nums.length;i++){
    let num = nums[i]
    if(num===val){
      // 啥也不干
    }else{
      nums[ans] = num
      ans++
    }
  }
  return ans
};


console.log(removeElement([3,2,2,3],3))
