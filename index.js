const arr = ["😀", "🐶", "🍏", 1, 2, 3, 4];

const [...rest] = arr;

console.log(JSON.stringify(arr) === JSON.stringify(rest));
