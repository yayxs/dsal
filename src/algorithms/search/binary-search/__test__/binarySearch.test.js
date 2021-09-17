import binarySearch from '../binarySearch';

describe('二分查到', () => {
  it('在已经排序的数组中返回一个索引', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
  });
});
