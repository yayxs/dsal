function sum(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sum(n - 1);
}

/**
 * 5
 * 5 + sum(4)
 * 5 + 4 + sum(3)
 * 5 + 4 + 3 + sum(2)
 * 5 + 4 + 3 + 2 + sum(1)
 * 5 + 4 + 3 + 2 + 1 + 0  = 15
 */

console.log(sum(5));
