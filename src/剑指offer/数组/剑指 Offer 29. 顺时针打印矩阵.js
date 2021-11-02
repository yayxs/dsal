/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * @param {number[][]} matrix
 * @return {number[]}
 * matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *  [1,2,3,6,9,8,7,4,5]
 */
var spiralOrder = function (matrix) {};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

let sex = '男';

let params = {
  sex: sex === '男' ? 0 : sex === '女' ? 1 : '',
};
