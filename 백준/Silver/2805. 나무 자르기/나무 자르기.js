const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const height = input[1].split(' ').map(Number);

let sortedHeight = height.sort((a, b) => a - b);
let start = 0;
let end = sortedHeight[n - 1];
let answer = 0;

// 이분 탐색
while (start <= end) {
    let midHeight = Math.floor((start + end) / 2);
    let sum = 0;
    // 나무 총합 계산
    for (let i = 0; i < n; i++) {
        let treeHeight = 0;
        if (sortedHeight[i] > midHeight) {
            treeHeight = sortedHeight[i] - midHeight;
            sum += treeHeight;
        }
    }

    // 나무가 많으면, 높이를 더 높인다.(최대 높이를 위해서 같을 때도 일단 저장)
    if (sum >= m) {
        answer = midHeight;
        // midHeight 값+1
        start = midHeight + 1;
    }
    // 나무가 부족하면, 높이를 낮춰서 더 많이 자른다.
    else {
        // midHeight 값-1 
        end = midHeight - 1;
    }

}
console.log(answer);