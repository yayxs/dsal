/**
 * arr len i
 * @param {*} arr
 */
function oneDimensionalArray(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    console.log(arr[i])
  }
}
function twoDimensionalArray(arr) {
  let outLen = arr.length
  for (let i = 0; i < outLen; i++) {
    let inLen = arr[i].length
    for (let j = 0; j < inLen; j++) {
      console.log(arr[i][j])
    }
  }
}

/**
 * n arr i
 * @param {*} n
 */
function init(n) {
  var arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
}
