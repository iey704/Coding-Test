const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const T = [];
const P = [];

input.forEach(line => {
    const[t,p] = line.split(' ').map(Number);

    T.push(t);
    P.push(p);
});


const dp = Array(N+1).fill(0);

for(let i=0; i<N; i++){

    // 상담 안 했을 땐 유지
    dp[i+1] = Math.max(dp[i+1], dp[i]);

    // 상담 가능한 날짜일 경우에만 수익 계산 진행
    if(i+T[i] <= N){
        dp[i+T[i]] = Math.max(dp[i+T[i]], dp[i]+P[i]);
    }
}

console.log(Math.max(...dp));