const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const number = input[0].split(" ").map(Number);

let sum = 0;
let array = [];
for (let i = 0; i < number; i++) {
  array.push(i+1);
  sum += array[i];
}

console.log(sum);
