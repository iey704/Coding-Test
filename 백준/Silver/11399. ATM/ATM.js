const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b); // 문자열 배열을 숫자 배열로 변환

let sum = 0;
let answer = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  answer += sum; // 누적된 합
}

console.log(answer);