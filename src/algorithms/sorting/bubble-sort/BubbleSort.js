import Sort from './../Sort';

/**
 * 相邻的元素两两比较 当一个元素大于右侧相邻? 交换位置:位置不变
 * 5 8 6 3 9 2 1 7
 * ---------------------------第1轮
 * 5和8进行比较不换(X) arr[0]和arr[1]
 * 5  8  6   3   9   2   1 7
 * [5  8]  6   3   9   2   1 7
 * [5  8]  6   3   9   2   1 7
 * ---------------------------第2轮
 * 8和6比较交换 arr[1]和arr[2]
 * 5  8  6   3  9  2  1  7
 * 5 [8  6]  3  9  2  1  7
 * 5  6  8   3  9  2  1  7
 * ---------------------------第3轮
 * 8和3比较交换 arr[2]和arr[3]
 * 5  6  8   3  9  2  1  7
 * 5  6  [8  3] 9  2  1  7
 * 5  6  3   8  9  2  1  7
 * ---------------------------第4轮
 * 8和9比较不变 arr[3]和arr[4]
 * 5  6  3   8  9  2  1  7
 * 5  6  3  [8  9] 2  1  7
 * 5  6  3  8   9  2  1  7
 * ---------------------------第5轮
 * 9和2比较交换 arr[4]和arr[5]
 * 5  6  3  8   9  2  1  7
 * 5  6  3  8   [9 2] 1  7
 * 5  6  3  8   2  9  1  7
 * ---------------------------第6轮
 * 9和1比较交换 arr[5]和arr[6]
 * 5  6  3  8   2  9  1  7
 * 5  6  3  8   2  [9 1]  7
 * 5  6  3  8   2  1  9  7
 * ---------------------------第7轮
 * 9和7比较交换 arr[6]和arr[7]
 * 5  6  3  8   2  1   9  7
 * 5  6  3  8   2  1  [9  7]
 * 5  6  3  8   2  1   7  9
 * ----------------------------------
 * 5  8  6  3   9  2   1  7 -- old
 * 5  6  3  8   2  1   7  9
 */

export default class BubbleSort extends Sort {
  sort(oriArr) {
    // 保存是否有交换信息的标志
    let swapped = false;
    // 克隆数组以防止被修改
    const array = [...oriArr];
    for (let i = 0; i < array.length; i += 1) {
      swapped = false;
      // 调用访问回调
      this.callbacks.visitCb(array[i]);
      // 如果元素错误交换
      if (this.comparator.lessThan(array[j + 1], array[j])) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}
const targetArr = [5, 8, 6, 3, 9, 2, 1, 7];
function foo(targetArr) {
  const arr = [...targetArr];
  const oLen = arr.length;
  const iLen = arr.length;
  // 总是不需要交换
  let swapped = false;
  for (let i = 0; i < oLen; i++) {
    // 每次循环都是false
    swapped = false;
    console.log(`经过第${i + 1}次后`, arr);
    console.log('外层取的值', arr[i]);
    for (let j = 0; j < iLen - i; j++) {
      console.log('内层取的值', arr[j]);
      // console.log('i---', i, arr[i]);
      // console.log('j---', j, arr[j]);
      /**
       * i j  i-val j-val
       * -----------------------
       * 1 0    6     5
       * 1 1    6     6
       * 1 2    3     6
       * 1 3    3     8
       * 1 4    3     8
       * 1 5    3     8
       * 1 6    3     8
       */
      if (arr[j + 1] < arr[j]) {
        // 才会置换
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        // 置换了
        swapped = true;
      }
    }
    // console.log(`第${i + 1}次外层循环`);
    if (!swapped) {
      console.log('不需要交换', arr);
      return arr;
    }
  }
  return arr;
}

console.log(foo(targetArr));

/**
 * i = 0
 * [5, 8, 6, 3, 9, 2, 1, 7]
 * [5, 6, 3,8, 2, 1,7, 9]
 * --------------------------
 * i j  i-val j-val
 * -----------------------
 * 0 0    5     5
 * 0 1    5     8
 * 0 2    5     6
 * 0 3    5     3
 * 0 4    5     9
 * 0 5    5     2
 * 0 6    5     1
 * 0 7    5     7
 */
// 5和8比较不换
// 8和6比较交换
// 6和3比较交换
// 3和9比较不换
// 9和2比较交换
// 2和1比较交换
// 1和7比较不换

/**
 * i = 1
 *
 * [5, 6, 3,8, 2, 1,7, 9]
 * i j  i-val j-val
 * -----------------------
 * 1 0    6     5
 * 1 1    6     6
 * 1 2    3     6
 * 1 3    3     8
 * 1 4    3     8
 * 1 5    3     8
 * 1 6    3     8
 */
// 5和8比较不换
// 8和6比较交换
// 6和3比较交换
// 3和9比较不换
// 9和2比较交换
// 2和1比较交换
// 1和7比较不换
