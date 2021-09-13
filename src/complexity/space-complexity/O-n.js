// 算法分配的空间是线性的集合 比如数组 集合的大小和输入规模n成正比 空间复杂度记为 O(n)

function foo(n) {
  const arr = new Array(n).fill(1);
  console.log(arr);
}
foo(4);
