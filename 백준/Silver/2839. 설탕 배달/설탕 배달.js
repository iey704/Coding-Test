const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let num = Number(input);

// 18: 5,5,5,3
// 6: 3,3
// 9: 3,3,3
// 11: 5,3,3
// 14: 5,3,3,3

let count = 0;
// (num%5)<3일 때, 5의 개수는 (몫-1)번
// (num%5) == 3일 때, 5의 개수는 (몫)번과 같다.
while (num >= 0) {
    if(num%5 ===0){
        count += num/5;
        console.log(count);
        return;
    }
    // 5의 배수가 아닐 땐, 3kg 이용
    num -= 3;
    count++;
}

// 정확하게 N킬로그램을 만들 수 없다면 -1을 출력
console.log(-1);