let str = `vasttsav`

function isHWStr(str) {
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }

  return true
}

console.log(isHWStr(str))
