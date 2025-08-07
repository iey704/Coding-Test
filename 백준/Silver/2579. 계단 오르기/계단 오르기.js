const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");

const num = Number(input[0]);
const stair = [];

for (let i=1; i<=num; i++){
    stair.push(Number(input[i]));
}

const dp = Array(num).fill(0);
// 초기값 설정
dp[0] = stair[0];
dp[1] = stair[0] + stair[1];
dp[2] = Math.max(stair[0]+stair[2], stair[1]+stair[2]);

for(let i=3; i<num; i++){
    dp[i] = Math.max(
        dp[i-2] + stair[i],
        dp[i-3] + stair[i-1] + stair[i]
    );
}

console.log(dp[num - 1]);
