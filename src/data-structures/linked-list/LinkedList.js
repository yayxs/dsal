import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  /**
   *
   * @param {Function} [compFn]
   */
  constructor(compFn) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compFn);
  }

  prepend(value) {
    // 使新及节点成为头部
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // 如果没有尾部新节点设置为尾结点
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  /**
   * 链表的查找
   * @param {Object} findParams
   * @param {*}  findParams.value
   * @param {function}  [findParams.callback]
   * @returns {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    // 必须有头节点
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // 如果指定回调 && 通过回调查找节点
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // 如果指定了值 && 按照值进行比较
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
  /**
   *
   * @returns {LinkedListNode}
   */
  deleteHead() {
    // 头节点不存在直接返回null
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }
  deleteTail() {
    const deletedTail = this.tail;
    // 只有一个节点
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    // 倒退到最后一个节点
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        // 没有下一个节点 即是最后一个节点
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }
}
