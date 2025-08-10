const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);
const arr = [];
for(let i=1; i<=num; i++){
    arr.push(Number(input[i]));
}

const dp = Array(num).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0]+arr[2], arr[1]+arr[2], dp[1]);

for(let i=3; i<num; i++){
    dp[i] = Math.max(dp[i-1],dp[i-2]+arr[i], dp[i-3]+arr[i-1]+arr[i]);
}

console.log(dp[num-1]);