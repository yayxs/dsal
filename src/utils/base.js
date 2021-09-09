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
     * 执行第x次    i        j        i-val      j-val
     * ------------------------------------------------------------
     *    1        0         0         1          4
     *    2        0         1         1          5
     *    3        0         2         1          6
     *    4        1         0         2          4         j<i
     *    5        1         1         2          5
     *    6        1         2         2          6
     *    7        2         0         3          4         j<i
     *    8        2         1         3          5         j<i
     *    9        2         2         3          6
     */
    console.log('ii', i, outer[i]);
    console.log('jj', j, inner[j]);
  }
  console.log('-------------------', ++oTime);
}
