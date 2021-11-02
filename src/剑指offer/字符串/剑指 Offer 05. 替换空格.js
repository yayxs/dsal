/**
 * 暴力 双指针 原地修改
 * @param {string} s
 * @return {string}
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 输入：s = "We are happy."
输出："We%20are%20happy."
 */
 var replaceSpace = function(s) {
  let arr = s.split('') // arr
  let oldLen = arr.length // 原始长度8
  let spaceCount = 0 // 空格数量

  // 统计空格的长度
  for(let i =0 ; i<oldLen ;i++){
    let char = s[i]
    if(char === ' ') spaceCount++
  }

  arr.length = arr.length + spaceCount *2  // ' ' -->'%20' 1->3

  let [i,j] = [oldLen -1,arr.length -1]
  while(i>=0){
    let left = arr[i]
    if(left !== ' '){

      arr[j] = arr[i]
    }else if(left === ' '){ // 空格

      arr[j-2] = '%'
      arr[j-1] = '2'
      arr[j] = '0'
      j = j -2
    }
    i--
    j--
  }

  return arr.join('')
};

let str = `we are`

console.log(replaceSpace(str))
