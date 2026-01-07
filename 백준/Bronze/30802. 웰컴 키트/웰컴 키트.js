const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const [t, p] = input[2].split(' ').map(Number);

let answer = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) continue;
    answer += Math.ceil(arr[i] / t); // 묶음 수 계산
}

console.log(answer);
let pen_bundle = Math.floor(n / p);
let pen_count = n % p;
console.log(pen_bundle, pen_count)