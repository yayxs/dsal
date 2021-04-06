# 前言

**数据结构和（与）算法** 是我们的原力。`《算法再好也算不懂你的心》系列文章` 在今天正式启动。

毫无疑问，茶余饭后，不知不觉，都会提到`数据结构与算法` ，至于为什么这两个东西在开发者心中占有那么重的位置呢。我想随着你看到这篇之后，一块探索`数据结构算法` 的路程便启动了。

身处什么环境的人才会想着去看看算法呢？我个人觉得是

- 工作了一段时间，希望能够更有效的处理上层业务逻辑
- 准备面试，因为面试跳槽一般会有算法题目，想更上一层楼

至于数据结构与算法，这个就好比你吃饭一样，吃着吃着总会胖的。也就是说，`胖`这个过程是慢慢的，所以关于`刷题`或者看算法是个积淀的过程。

## 语言选择

- JavaScript 之后所有的所有案例均采用`JavaScript`

## 数据结构

### 重要性

- 对于技术开发者，理解数据结构十分重要。因为我们能够借助编程语言来解决实际的问题
- 很重要的一点，如果我们选择的不恰当的数据格式，很有可能影响我们写的程序的性能
- 时间：比如说我们的程序跑起来比别人慢（不能让孩子输在起跑线上）
- 空间：比如说我们的代码占用的内存比较大

### 什么是数据结构

在[计算机科学](https://zh.wikipedia.org/wiki/计算机科学)中，**数据结构**（英语：data structure）是计算机中存储、组织[数据](https://zh.wikipedia.org/wiki/数据)的方式。

当然我们在实际的解决问题中，会处理相当多的数据，那么我们该怎么去组织这些数据呢，是不是需要有一定的数据格式

## 算法

### 重要性

- 算法在计算机科学中扮演着十分重要的角色，解决一个问题的方法好坏是十分重要

- 了解著名的算法很重要

### 什么是算法

**算法**（algorithm），在[数学](https://zh.wikipedia.org/wiki/數學)（[算学](https://zh.wikipedia.org/wiki/算學)）和[计算机科学](https://zh.wikipedia.org/wiki/電腦科學)之中，为任何一系列良定义的具体计算步骤[[1\]](https://zh.wikipedia.org/wiki/算法#cite_note-1)，常用于[计算](https://zh.wikipedia.org/wiki/計算)、[数据处理](https://zh.wikipedia.org/w/index.php?title=數據處理&action=edit&redlink=1)和[自动推理](https://zh.wikipedia.org/wiki/自动推理)。作为一个[有效方法](https://zh.wikipedia.org/w/index.php?title=有效方法&action=edit&redlink=1)，算法被用于计算[函数](https://zh.wikipedia.org/wiki/函數)[[2\]](https://zh.wikipedia.org/wiki/算法#cite_note-2)，它包含了一系列定义清晰的指令[[3\]](https://zh.wikipedia.org/wiki/算法#cite_note-3)，并可于[有限的](https://zh.wiktionary.org/wiki/Special:Search/有限的)时间及空间内清楚的表述出来[[4\]](https://zh.wikipedia.org/wiki/算法#cite_note-4)。

`大O表示法`

![](https://gitee.com/webfrontup/javascript-algorithms/raw/master/assets/big-o-graph.png)

# 数组结构

## 数组

- 创建一个数组

```js
const arr = new Array()

let res = new Array(100000).fill(10)
console.log(res)
var arr = new Array(100000).fill(100)
console.time('timer')
arr[0]
console.timeEnd('timeEnd')
console.time('timer')
arr[100000 - 1]
console.timeEnd('timeEnd')
```

- 创建一个每个匀速固定的值

```js
const arr = new Array(11).fill(1)
console.log(arr)
```

- 初始化二维数组

  ```js
  let arr = []
  const len = 5
  for (let i = 0; i < len; i++) {
    arr[i] = []
  }
  console.log(arr)
  ```

有两种数据结构类似于数组,但在添加和删除元素时更为可控。它们就是栈和队列

- 二维数组的访问

```js
const arr = new Array(10)
console.log(arr)
const len = arr.length
for (let i = 0; i < len; i++) {
  arr[i] = []
}

const outerLen = arr.length
console.log(outerLen) // 10
for (let i = 0; i < outerLen; i++) {
  // 内部长度
  const innerLen = arr[i].length
  console.log(innerLen)
  for (let j = 0; j < innerLen; j++) {
    console.log(arr[i][j])
  }
}
```

## 打印输出基本的图形-三角等等

```js
/**
 * 外层控制行数
 * 内层控制个数
 *  **** 0 4
 *  **** 1 4
 *  **** 2 4
 */
for (let i = 0; i < 3; i++) {
  for (j = 0; j < 4; j++) {
    document.write('*')
  }
  document.write(`<br />`)
}

document.write(`<hr />`)

/**
 *  *    0 1
 *  **   1 2
 *  ***  2 3
 *  **** 3 4
 */

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0, len = i + 1; j < len; j++) {
    document.write('*')
  }
  document.write(`<br />`)
}

document.write(`<hr />`)

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0; j <= i; j++) {
    document.write('*')
  }
  document.write(`<br />`)
}

document.write(`<hr />`)

/**
 *  **** 0 4
 *  ***  1 3
 *  **   2 2
 *  *    3 1
 */

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0, len = 4 - i; j < len; j++) {
    document.write('*')
  }
  document.write(`<br />`)
}

/**
 *     *
 *    ***
 *   *****
 *  *******
 */
```

## 栈

**栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底**

![](https://raw.githubusercontent.com/yayxs/Pics/master/Snipaste_2020-04-18_12-09-07.png)

- push(element(s))：添加一个（或几个）新元素到栈顶。
- pop()：移除栈顶的元素，同时返回被移除的元素。
- peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的
  元素，仅仅返回它）。
- isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
- clear()：移除栈里的所有元素。
- size()：返回栈里的元素个数。这个方法和数组的 length 属性很类似。

## 栈的封装

### 基于`ES5` 的栈实现

```js
// es5 版本
function Stack() {
  this.arr = []
  Stack.prototype.push = function (ele) {
    this.arr.push(ele)
  }
  Stack.prototype.pop = function () {
    return this.arr.pop()
  }
  Stack.prototype.peek = function () {
    return this.arr[this.arr.length - 1]
  }
  Stack.prototype.size = function () {
    return this.arr.length
  }
  Stack.prototype.toString = function () {
    let str = ''
    for (let i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + ' '
    }
    return str
  }
}
```

### 基于数组的栈

```js
// es6 版本
class StackArray {
  constructor() {
    this.items = []
  }
  // 栈顶增加元素
  push(ele) {
    this.items.push(ele)
  }
  // 栈顶弹出元素
  pop() {
    return this.items.pop()
  }
  // 返回栈里的元素个数
  size() {
    return this.items.length
  }
  // 移除栈里的所有元素
  clear() {
    this.items.length = 0
  }
  isEmpty() {
    return this.items.length === 0
  }
  peek() {
    return this.items[this.items.length - 1]
  }
}
```

## 队列 FIFO

![](https://raw.githubusercontent.com/yayxs/Pics/master/Snipaste_2020-04-18_11-59-03.png)

- enqueue(element(s))：向队列尾部添加一个（或多个）新的项
- dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
- front()：返回队列中第一个元素——最先被添加，也将是最先被移除的 元素。队列不做任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）
- isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false
- size()：返回队列包含的元素个数，与数组的 length 属性类似

## 链表

链表和数组相似，它们都是有序的列表、都是线性结构（有且仅有一个前驱、有且仅有一个后继）。不同点在于，链表中，数据单位的名称叫做“结点”，而结点和结点的分布，在内存中可以是**离散**的。

### 数组 vs 链表

- 链表的插入或者删除的效率高；访问效率低
- 数组的访问效率高

## 二叉树

每一颗单独的二叉树分为，`根节点` `左子树` `右子树` 树的遍历大体分为

![算法数据结构-二叉树的遍历](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/%E7%AE%97%E6%B3%95%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86.png)

- 根结点-左子树-右子树 对应的就是先序遍历
- 左子树-根节点-右子树
- 左子树-右子树-根节点

二叉树可以**没有根结点** 作为一个空树存在

如果不是空树，那需要满足

根节点 + 左子树 + 右子树 （其中左右子树都是二叉树）

## 二叉树的遍历

二叉树的遍历就是访问结点的过程：

- 先序遍历
- 中序遍历
- 后序遍历
- 层次遍历

### 先序遍历

**广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻 点，就像一次访问图的一层。**

![Snipaste_2020-04-18_12-40-22.png](https://i.loli.net/2020/04/20/gw6WR1MC3bSloZN.png)

### 深度优先搜索 DFS

**深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路 径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，它是先深 度后广度地访问顶点**

![Snipaste_2020-04-18_12-43-19.png](https://i.loli.net/2020/04/20/lFRpSfsUI3niqGD.png)

| 算法         | 数据结构 |                      | 描述                                                            |
| ------------ | -------- | -------------------- | --------------------------------------------------------------- |
| 深度优先搜索 | 栈       | Depth-First Search   | 通过将顶点存入栈中，顶点是沿着路径被探索,存在新的相邻的顶点访问 |
| 广度优先搜索 | 队列     | Breadth-First Search | 通过将顶点存入队列中 最先入队列的顶点先被探索                   |

# 复杂度

循环遍历 n 维数组只需要重点关注最内层循环的次数,一维数组是`O(n)`

```js
// T(n) =1 + 1+ (n+1)+n +n = 3n+3
function trs(arr) {
  let len = arr.length // 执行1次
  // let i = 0 // 执行1次 初始化语句
  // i<len 判断语句比递增语句多执行1次 n+1
  // i++ 执行n次

  for (let i = 0; i < len; i++) {
    console.log(arr[i]) // 循环体n次
  }
}
```

二维数组是 O(n^2)

```js
function traverse(arr) {
  let outLen = arr.length // 1
  // 1
  // n+1
  // n
  for (let i = 0; i < outLen; i++) {
    let inLen = arr[i].length // n
    // n
    // n*(n+1)
    // n*n
    for (let j = 0; j < inLen; j++) {
      console.log(arr[i][j]) // n^2 // 关心内层循环执行的次数
    }
  }
}
```
