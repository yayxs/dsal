const arr = [3, 1, 2, 5, 4, 9, 7, 2, 2];

const m = new Map();
let count = 1;

for (let i = 0; i < arr.length; i++) {
  const had = m.has(arr[i]);
  if (had) {
    m.set(arr[i], ++count);
  } else {
    m.set(arr[i], count);
  }
  // if(m.has())
}

console.log(m); // { 3 => 1, 1 => 1, 2 => 3, 5 => 1, 4 => 1, 9 => 1, 7 => 1 }
