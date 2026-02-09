const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const costs = [];

for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    costs.push(line);
}

let dp = [[]];
dp[0][0] = costs[0][0];
dp[0][1] = costs[0][1];
dp[0][2] = costs[0][2];

for (let j = 1; j < n; j++) {
    dp[j] = [];
    // 현재 어떤 집을 선택하는지에 따라 과거의 집들을 어떤 걸 선택할지 경로를 생성함
    // 기준 == 현재 not 과거
    dp[j][0] = costs[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = costs[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = costs[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
}

console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));