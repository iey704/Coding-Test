const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let answer = 0;

arr.sort((a, b) => a - b);
if (N == 1) answer = arr[0] * arr[0]
else answer = arr[0] * arr[N-1];

console.log(answer);