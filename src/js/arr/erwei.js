const arr = new Array(10);
console.log(arr);
const len = arr.length;
for (let i = 0; i < len; i++) {
  arr[i] = [];
}

const outerLen = arr.length;
console.log(outerLen); // 10
for (let i = 0; i < outerLen; i++) {
  // 内部长度
  const innerLen = arr[i].length;
  console.log(innerLen);
  for (let j = 0; j < innerLen; j++) {
    console.log(arr[i][j]);
  }
}
