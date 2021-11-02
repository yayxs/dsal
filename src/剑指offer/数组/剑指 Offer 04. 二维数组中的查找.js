/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var findNumberIn2DArray = function(matrix, target) {

  if(!matrix.length) return false
  let x = matrix.length - 1
  let y = 0
  while(x >=0 && y<matrix[0].length ){
    let num = matrix[x][y]
    if(num === target){
      return true
    } else if( num >target){
      x--
    }else if(num <target){
      y++
    }
  }

  return false

};

let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(matrix,19))



/**
 * Binary Search Tree
 */
