import LinkedList from './../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // 快速跟踪所有实际键

    this.keys = {};
  }
  /**
   * 将秘钥字符串转为哈希数
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    const hash = new Array.from(key).reduce(
      (hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0),
      0
    );
    // index = HashCode(Key) % Array.length
    return hash % this.buckets.length;
  }
}

const ht = new HashTable(4);

const index = ht.hash('this');
console.log('index', index);
