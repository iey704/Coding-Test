const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const fruits = input[1].split(' ').map(Number);

let left = 0;
let answer = 0;
let fruitsMap = {};
let kinds = 0;
for (let right = 0; right < n; right++) {
    // 1. right 확장: 구간을 늘려본다
    const rightFruit = fruits[right];
    if (!fruitsMap[rightFruit]) {
        fruitsMap[rightFruit] = 0;
        kinds++;
    }

    fruitsMap[rightFruit]++;

    // 2. left 축소: 종류가 2개를 초과하면 왼쪽을 줄인다 
    while (kinds > 2) {
        const leftFruit = fruits[left];

        fruitsMap[leftFruit]--;

        if (fruitsMap[leftFruit] === 0) {
            delete fruitsMap[leftFruit];
            kinds--
        }
        left++;
    }
    answer = Math.max(answer, right - left + 1);
}

console.log(answer);
