import LinkedList from './../linked-list/LinkedList';

export default class Queue {
  constructor() {
    // 基于链表实现
    this.linkedList = new LinkedList();
  }
  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }
  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }
}
