import Compare from '../../utils/comparator/Comparator';
import HashTable from './../hash-table/HashTable';
export default class BinaryTreeNode {
  /**
   *
   * @param {*} value - node value
   */
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
    // 任何与节点相关的元信息都可存储在这儿
    this.meta = new HashTable();
    // 比较节点的大小
    this.nodeCompar = new Compare();
  }
  /**
   * @returns {number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }
  /**
   * @returns {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }
  /**
   * @returns {number}
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }
  /**
   * 平衡系数
   * @returns {number}
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  /**
   * 获取父母的兄弟姐妹 如果存在的话
   */
  get uncle() {
    if (!this.parent) {
      return undefined;
    }
    // 检查祖父节点
    if (!this.parent.parent) {
      return undefined;
    }

    // 检查祖父母是否有两个孩子
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }
    if (this.nodeCompar.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right;
    }
    return this.parent.parent.left;
  }
  /**
   * 设置节点的值
   * @param {*} value
   * @returns {BinaryTreeNode} 当前节点
   */
  setValue(value) {
    this.value = value;
    return this;
  }
  /**
   * 设置当前节点的子节点
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setLeft(node) {
    // 重置左节点的父节点 因为它将会分离
    if (this.left) {
      this.left.parent = null;
    }
    // 将新节点添加至左侧
    this.left = node;
    // 当前节点是新左节点的父节点
    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }
  /**
   * 设备当前节点的右节点
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }
    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }
  /**
   * 移除所有的子节点 包括左孩子节点和右孩子节点
   * @param {*} nodeRemove
   * @returns {boolean}
   */
  removeChild(nodeRemove) {
    if (this.left && this.nodeCompar.equal(this.left, nodeRemove)) {
      this.left = null;
      return true;
    }
    if (this.right && this.nodeCompar.equal(this.right, nodeRemove)) {
      this.right = null;
    }
    // 移除失败
    return false;
  }
}
