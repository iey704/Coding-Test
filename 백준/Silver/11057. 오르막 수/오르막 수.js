const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

// i: i자리 수, j: 맨끝 숫자
// dp[i][j] = dp[i-1][0] + dp[i-1][1] + ... dp[i-1][j]
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

for (let j = 0; j <= 9; j++) {
    dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) { // 자릿수
    for (let j = 0; j <= 9; j++) { // 마지막 숫자
        for (let k = 0; k <= j; k++) { // 0부터 j까지 다 더하기
            dp[i][j] += (dp[i - 1][k]) % 10007;
        }
    }
}

let answer = 0;
for (let j = 0; j <= 9; j++) {
    answer += dp[n][j];
}
console.log(answer % 10007);