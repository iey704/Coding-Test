const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");
const num = Number(input[0]);

const dp = Array(num + 1).fill(0n);
dp[1] = 1n;
dp[2] = 1n;

for (let i = 3; i <= num; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[num].toString());

