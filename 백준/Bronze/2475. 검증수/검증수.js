const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[0].split(' ').map(Number);

// 6자리 고유번호: 00000_ ~ 99999_
// 검증수 == 5자리 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지
let check_num = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    check_num = arr[i] * arr[i];
    sum += check_num;
}

console.log(sum % 10);