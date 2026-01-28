const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let n = Number(input);

// 제곱수들의 합의 최소 개수
const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}

console.log(dp[n]);