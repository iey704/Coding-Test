const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[2]);

let arrayN = input[1].split(' ').map(Number).sort((a, b) => a - b);
let arrayM = input[3].split(' ').map(Number);

const nSet = new Set(arrayN);
let answer = [];

for (let i = 0; i < m; i++) {
    let found = nSet.has(arrayM[i]);
    answer.push(found ? 1 : 0);
}

console.log(answer.join('\n'));