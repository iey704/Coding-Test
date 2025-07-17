const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
const array = input.slice(1);
const max = Math.max(...array);

const dp = Array(max+1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < N; i++) {
  console.log(dp[array[i]]);
}
