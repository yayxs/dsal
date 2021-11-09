export default class LinkedListNode {
  /**
   * 构造node节点
   * @param {*} value
   * @param {*} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  /**
   *
   * @param {*} callback
   * @returns
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
