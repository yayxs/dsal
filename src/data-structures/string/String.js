class BaseStr {
  constructor(str) {
    this.str = typeof str === 'string' ? str : '';
  }
  /**
   * @returns {string}
   */
  read() {
    console.log(this.str);
    return this.str;
  }
  /**
   * length
   * @returns {number}
   */
  len() {
    console.log(this.str.length);
    return this.str.length;
  }
  atIndex(index) {
    console.log(this.str.at(0), this.str.at(-1), this.str.at(1));
    return this.str.at(index);
  }
  /**
   * 0~length-1
   * @param {number} index  default 0
   * @param {number} type 1 || other
   * @returns
   */
  findOnlyChar(index, type = 1) {
    console.log(this.str.charAt(index));
    return type === 1 ? this.str.charAt(index) : this.str[index];
  }
  /**
   *
   * @param {string} a
   * @param {string} b
   * @returns {number}
   */
  compare(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  /**
   * concat a and b not change origin
   * @param {*} a
   * @param {*} b
   * @returns
   */
  concat(a, b) {
    console.log(''.concat(a, b));
    return ''.concat(a, b);
  }
  /**
   * any to str
   * @param {*} any
   */
  any2Str(any = [undefined, null, NaN, '1', ' ', ' Ax', 0, 1]) {
    any.forEach((it) => {
      console.log(String(it));
    });
  }

  end(str, length) {}
}
