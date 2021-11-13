export default class LinkedListNode {
  /**
   * 构造node节点
   * @param {*} val leetcode 节点值 val
   * @param {*} next
   */
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
  /**
   *
   * @param {*} callback
   * @returns
   */
  toString(callback) {
    return callback ? callback(this.val) : `${this.val}`;
  }
}
