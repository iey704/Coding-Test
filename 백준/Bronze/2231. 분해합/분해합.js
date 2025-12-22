const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 245의 분해합 == 245+2+4+5
const num = input[0];
const N = Number(input[0]);
let answer = 0;

for (let x = 1; x < N; x++) {
    let numStr = String(x);
    // 분해합
    let sum = x;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }

    // 분해합이 N이면 생성자 발견!
    if (sum === N) {
        answer = x;
        break;
    }
}

console.log(answer);