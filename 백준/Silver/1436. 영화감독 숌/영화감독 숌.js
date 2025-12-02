const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const num = input[0];

// 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수 == 종말의 수
// 2 - 1666
// 3 - 2666
// 5 - 4666
// 6 - 5666
// 187 - 66666
// 500 - 166699

let count = 0;
let curr = 666;
while (count < num) {

    if (curr.toString().includes('666')) count++;

    curr++;
}

console.log(curr - 1);