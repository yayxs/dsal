import Sort from './../Sort';

export default class SelectionSort extends Sort {
  sort(originalArray) {
    // 克隆原始数组
    const array = [...originalArray];
    for (let i = 0; i < array.length - 1; i += 1) {
      let minIndex = i;
      // 正在访问的元素
      this.callbacks.visitCb(array[i]);
      // 在数组的剩余部分查找元素
      for (let j = i + 1; j < array.length; j += 1) {
        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }
      // 如果找到了新的最小元素?与当前的第i个元素置换
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    return array;
  }
}

// function logger(val) {
//   // console.log('is-visiting', val);
// }
// function SelectionSort(originalArray) {
//   const array = [...originalArray];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     logger(array[i]);
//     // 在数组的其余元素中查找做小
//     for (let j = i + 1; j < array.length; j++) {
//       logger(array[j]);
//     }
//   }
//   return array;
// }
// SelectionSort([
//   15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
// ]);
