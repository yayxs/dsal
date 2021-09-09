/**
 * 外层控制行数
 * 内层控制个数
 *  **** 0 4
 *  **** 1 4
 *  **** 2 4
 */
for (let i = 0; i < 3; i++) {
  for (j = 0; j < 4; j++) {
    document.write("*");
  }
  document.write(`<br />`);
}

document.write(`<hr />`);

/**
 *  *    0 1
 *  **   1 2
 *  ***  2 3
 *  **** 3 4
 */

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0, len = i + 1; j < len; j++) {
    document.write("*");
  }
  document.write(`<br />`);
}

document.write(`<hr />`);

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0; j <= i; j++) {
    document.write("*");
  }
  document.write(`<br />`);
}

document.write(`<hr />`);

/**
 *  **** 0 4
 *  ***  1 3
 *  **   2 2
 *  *    3 1
 */

for (let i = 0, len = 4; i < len; i++) {
  for (let j = 0, len = 4 - i; j < len; j++) {
    document.write("*");
  }
  document.write(`<br />`);
}

/**
 *     *
 *    ***
 *   *****
 *  *******
 */
