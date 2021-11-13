import LinkedListNode from './LinkedListNode.js';
import Comparator from '../../utils/comparator/Comparator.js';

export default class LinkedList {
  /**
   *
   * @param {Function} [compFn]
   */
  constructor(compFn) {
    /** 头部 */
    this.head = null;
    /** 尾部 */
    this.tail = null;
    /** 比较函数 */
    this.compare = new Comparator(compFn);
  }
  /**
   * 链表添加头结点
   * @param {*} val 新节点的值
   * @returns { LinkedList } 当前链表
   */
  prepend(val) {
    // 将新节点添加至头部 next->head
    const newNode = new LinkedListNode(val, this.head);
    // 头部变为新节点
    this.head = newNode;
    // 如果没有尾部 新节点设置为尾结点
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  /**
   * 链表添加尾部节点
   * @param {*} val
   * @returns {LinkedList}
   */
  append(val) {
    // 构造node节点
    const newNode = new LinkedListNode(val);
    // 没有头部
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // 添加到末尾
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  /**
   * 输出该链表中倒数第k个节点
   * @param {*} head 头节点
   * @param {*} k
   * @returns { LinkedListNode }
   */
  getKthFromEnd(head, k) {
    let fast, slow; // 快慢指针
    // 快慢指针同时指向头部
    fast = slow = this.head;
    while (k--) {
      fast = fast.next;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
  /**
   * 返回中间节点
   * @returns {LinkedListNode}
   */
  middleNode() {
    if (this.head === null && this.head.next === null) {
      return this.head;
    }
    // 快慢节点都指向头部
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  /**
   * 链表的查找
   * @param {Object} findParams
   * @param {*}  findParams.val
   * @param {function}  [findParams.callback]
   * @returns {LinkedListNode}
   */
  find({ val = undefined, callback = undefined }) {
    // 必须有头节点
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // 如果指定回调 && 通过回调查找节点
      if (callback && callback(currentNode.val)) {
        return currentNode;
      }
      // 如果指定了值 && 按照值进行比较
      if (val !== undefined && this.compare.equal(currentNode.val, val)) {
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
  /**
   * 链表反转
   * @returns { LinkedList}
   */
  reverse() {
    if (!this.head || !this.head.next) return this.head;
    // 当前节点
    let currNode = this.head;
    // 上一个节点
    let prevNode = null;
    // 下一个节点
    let nextNode = null;
    while (currNode) {
      // 存储下一个节点
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    // 重置头尾
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
  /**
   * 通过 head 反转链表
   * @returns
   */
  reverseByHead() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  /**
   * 删除相同的元素(链表去重)
   */
  deleteDuplicates() {
    let currNode = this.head;
    while (currNode && currNode.next) {
      if (currNode.val === currNode.next.val) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }
    return this.head;
  }
  /**
   * 根据头节点判断是是否是回文链表
   */
  isPalindrome() {
    // 一个节点 直接返回true
    if (this.head === null || this.head.next === null) {
      return true;
    }
    // 快慢指针指向头结点
    let fast = this.head;
    let slow = this.head;

    while (fast.next && fast.next.next) {
      // 慢指针走一步
      slow = slow.next;
      // 快指针走两步
      fast = fast.next.next;
    }
    // 反转
    slow = this.reverse(slow.next);
    while (slow) {
      if (this.head.val !== slow.val) {
        return false;
      }
      this.head = this.head.next;
      slow = slow.next;
    }
    return true;
  }
}

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(2);
list1.append(1);
// list1.append(3);

// console.log(list1);
console.log(list1.isPalindrome());
