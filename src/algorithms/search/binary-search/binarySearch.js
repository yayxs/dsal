import Compare from '../../../utils/comparator/Comparator';
/**
 * 二分搜索实现
 * @param {*} sortedArray 已经排了序
 * @param {*} seekElement 搜索元素
 * @param {function(a, b)} [comparaCallback] 比较函数
 * @returns {number}
 */
function binarySearch(sortedArray, seekElement, comparaCallback) {
  // 构建比较器
  const comp = new Compare(comparaCallback);
  // 当前数组的边界
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  while (startIndex <= endIndex) {
    // 中间元素的索引
    /**
     * [1,2,3,4]
     *  0 1 2 3
     * 开始索引 0
     * 结束索引 3  arr.length -1
     * 中间索引 x   0 + ((3-0)/2) = 1
     */
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    // 找到了元素 直接返回值
    if (comp.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }
    // 决定寻找左边还是右边
    if (comp.lessThan(sortedArray[middleIndex], seekElement)) {
      // 往右移动
      startIndex = middleIndex + 1;
    } else {
      //
      endIndex = middleIndex - 1;
    }
  }
  // 没有找到任何内容
  return -1;
}

export default binarySearch;
