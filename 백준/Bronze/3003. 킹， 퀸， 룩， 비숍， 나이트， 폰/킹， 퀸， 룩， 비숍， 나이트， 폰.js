const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = input.split(" ");

const answer = [1, 1, 2, 2, 2, 8];
let queue = [];

// 16개 피스: 킹 1, 퀸 1, 록 2, 비숍 2, 나이트 2, 폰 8
for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    let answer_num = answer[i] - num;
    if (num > answer[i]) queue.push(answer_num);
    else if (num < answer[i]) queue.push(answer_num);
    else if (num == answer[i]) queue.push(0);
}

console.log(queue.join(' '));