function isPalindrome(s) {
  if (typeof s !== 'string') return false;
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    ++left;
    --right;
  }
  return true;
}

let s1 = 'abcba',
  s2 = '123';
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
