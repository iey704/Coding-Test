const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            let sum = arr[i] + arr[j] + arr[k];
            // 1. sum이 M보다 크면? → continue
            // 2. sum이 M 이하면? → answer보다 크면 갱신
            if (sum <= M && sum > answer) answer = sum;
        }
    }
}

console.log(answer);