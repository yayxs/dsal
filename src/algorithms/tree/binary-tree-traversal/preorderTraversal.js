const origin = [1, null, 2, 3];

const root = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '4',
      left: {
        val: '8',
      },
      right: {
        val: '9',
      },
    },
    right: {
      val: '5',
    },
  },
  right: {
    val: '3',
    left: {
      val: '6',
    },
    right: {
      val: '7',
    },
  },
};

function preorderTraversal(node) {
  // 结果数组
  let res = [];
  // 边界处理
  if (!node) {
    return res;
  }
  // 初始化栈
  const stack = [];
  // 跟结点入栈 //
  stack.push(node);
  // 栈里有值
  while (stack.length) {
    const cur = stack.pop();
    // 当前子树的根节点
    res.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  console.log('栈的值', stack);

  return res;
}

preorderTraversal(root);

/**
 *              1(1)
 *    2(3)                3(2)
 *
 *  4(5)        5(4)           6(9)        7(8)
 *
 * 8(7)    9(6)
 */
