const outer = [1, 2, 3];
const inner = [4, 5, 6];
const oLen = outer.length;
const iLen = inner.length;
let iTime = 0;
let oTime = 0;

for (let i = 0; i < oLen; i++) {
  for (let j = 0; j < iLen; j++) {
    console.log('inner-time', ++iTime);
    /**
     * 执行第x次    i        j
     * ----------------------
     *    1        0         0
     *    2        0         1
     *    3        0         2
     *    4        1         0
     *    5        1         1
     *    6        1         2
     *    7        2         0
     *    8        2         1
     *    9        2         2
     */
    console.log('ii', i);
    console.log('jj', j);
  }
  console.log('-------------------', ++oTime);
}
