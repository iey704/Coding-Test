const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const v = Number(input[2]);
let count = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] === v) count++;
}

console.log(count);
