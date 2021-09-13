import LinkedList from './../linked-list/LinkedList';

export default class Stack {
  constructor() {
    // 基于 LinkedList
    this.linkedList = new LinkedList();
  }
  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    // 没有一个头节点
    return !this.linkedList.head;
  }
  /**
   *
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    // 头部的值
    return this.linkedList.head.value;
  }
  /**
   * 入栈 新元素成为新的栈顶
   * @param {*} value
   */
  push(value) {
    // push 意味着链表开头的新值
    // 压入代表着将值放在顶部
    this.linkedList.prepend(value);
  }
  /**
   * 只有栈顶元素才能出栈
   * @returns {*}
   */
  pop() {
    // 尝试从链表中删除第一个节点
    const removedHead = this.linkedList.deleteHead();
    // 有值直接返回 没值返回null
    return removedHead ? removedHead.value : null;
  }
  toArray() {}
  toString() {}
}
