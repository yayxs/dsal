// T(n) =1 + 1+ (n+1)+n +n = 3n+3
function trs(arr) {
  let len = arr.length // 执行1次
  // let i = 0 // 执行1次 初始化语句
  // i<len 判断语句比递增语句多执行1次 n+1
  // i++ 执行n次

  for (let i = 0; i < len; i++) {
    console.log(arr[i]) // 循环体n次
  }
}
/**
 * 二维数组的执行次数
 * 1+1+(n+1)+n+n+n+n^2+n+n*n+n^2 = 3n^2 + 5n + 3
 * @param {*} arr
 */
function traverse(arr) {
  let outLen = arr.length // 1
  // 1
  // n+1
  // n
  for (let i = 0; i < outLen; i++) {
    let inLen = arr[i].length // n
    // n
    // n*(n+1)
    // n*n
    for (let j = 0; j < inLen; j++) {
      console.log(arr[i][j]) // n^2 // 关心内层循环执行的次数
    }
  }
}

function foo(arr) {
  let len = arr.length

  for (let i = 1; i < len; i = i * 2) {
    console.log(arr[i])
  }
}
