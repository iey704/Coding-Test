const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input;

// 3의 배수 O, 5의 배수 O == FizzBuzz
// 3의 배수 O, 5의 배수 X == Fizz
// 3의 배수 X, 5의 배수 O == Buzz
// 3의 배수 X, 5의 배수 X == i
let answer = 0;
for (let i = 0; i < arr.length; i++) {
    // 숫자 확인: isNaN(value) → 값이 숫자가 아니면 true, 숫자면 false를 반환
    if (!isNaN(arr[i])) {
        if (i == 0) answer = Number(arr[i]) + 3;
        if (i == 1) answer = Number(arr[i]) + 2;
        if (i == 2) answer = Number(arr[i]) + 1;
    }
}

if (answer % 3 == 0 && answer % 5 == 0) console.log("FizzBuzz");
else if (answer % 3 == 0 && answer % 5 != 0) console.log("Fizz");
else if (answer % 3 != 0 && answer % 5 == 0) console.log("Buzz");
else console.log(answer);
