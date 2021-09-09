class StackArray {
  constructor() {
    this.items = [];
  }
  // 栈顶增加元素
  push(ele) {
    this.items.push(ele);
  }
  // 栈顶弹出元素
  pop() {
    return this.items.pop();
  }
  // 返回栈里的元素个数
  size() {
    return this.items.length;
  }
  // 移除栈里的所有元素
  clear() {
    this.items.length = 0;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}
