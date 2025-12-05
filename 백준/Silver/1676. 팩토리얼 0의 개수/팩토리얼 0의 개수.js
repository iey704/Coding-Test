const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// N!에서 뒤에서 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하기
// 0 <= N <= 500 : N이 주어졌을 때 0의 개수
let num = Number(input[0]);
let count = 0;

// 10은 2,5가 쌍으로 존재해야함.
while(num >= 5){
    num = Math.floor(num / 5);
    count += num; // 5로 나눴을 때 몫 == 0의 개수
}

console.log(count);