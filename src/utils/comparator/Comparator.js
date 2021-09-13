export default class Compare {
  /**
   * Constructor
   * @param {*} fn
   */
  constructor(fn) {
    this.compare = fn || Compare.defaultCompare;
  }
  /**
   * Default Compare
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  /**
   * a and b ===
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }
  /**
   * a is less tan b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }
  /**
   * a is greater than b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }
  /**
   *
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
  reverse() {
    const comOri = this.compare;
    this.compare = (a, b) => comOri(b, a);
  }
}
