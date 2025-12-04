const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const S = input[0];

// 알파벳 26개
let alpaphet = Array(26).fill(-1);

// 알파벳 아스키코드 사용
for (let i = 0; i < S.length; i++) {
    const index = S[i].charCodeAt(0) - 97;

    if (alpaphet[index] !== -1) continue;
    else alpaphet[index] = i;
}

console.log(alpaphet.join(' '));