# 链表

## 说明

`链表` 一个节点指向另一个节点

## 构建一个链表节点

```js
export default class LinkedListNode {
  /**
   * 构造node节点
   * @param {*} val leetcode 节点值 val
   * @param {*} next 下一个节点
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
```

- 常见基础的数据结构
- 线性表
- 指针串联线性结构
- 每一`链表节点`由数据域 + 指针域
- 链表的最后一个节点

## 链表

- 单链表
- 双链表
- 循环单链表
