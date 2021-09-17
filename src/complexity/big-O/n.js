function sum(n) {
  let sum = 0,
    i = 1
  for (; i <= n; ++i) {
    sum = sum + i
  }
  console.log(sum)
  return sum
}
sum(10)
