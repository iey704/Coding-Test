const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const x = Number(input[0]);

let dp = Array(x + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 0;
for (let i = 2; i <= x; i++) {
    // -1 계산 default .. 숫자의 경우에 따라 최솟값 계산
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[x]);