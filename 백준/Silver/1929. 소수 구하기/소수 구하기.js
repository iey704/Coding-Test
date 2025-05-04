const fs = require("fs");
const number = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = number[0].split(" ").map(Number);

for (let num = input[0]; num < input[1] + 1; num++) {
   
    if(isPrime(num) == true) {
        console.log(num);
    }
}

// 소수 판별 함수
function isPrime(num){
    if(num <= 1) { // 음수와 1은 소수가 아니다
        return false;
    }
    for(let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}