const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 각 사람의 덩치 등수 == 자신보다 더 큰 덩치의 사람의 수+1
const N = Number(input[0]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
    arr.push(input[i].split(' ').map(Number));
}

const ranks = [];

for (let i = 0; i < N; i++) {
    // 자신보다 덩치가 큰 사람의 수
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (i === j) continue; // 자기 자신이랑은 비교 x
        if (arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) count++; // weight, height 둘 다 커야 카운트
    }

    ranks.push(count + 1);
}

console.log(ranks.join(' '));