class Stack {
  constructor() {
    this.arr = [];
  }
  push(ele) {
    this.arr.push(ele);
  }
}

const s = new Stack();
console.log(s);
s.push(1);
console.log(s);
