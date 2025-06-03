const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input.map(Number);

for(let i=0; i<numbers.length; i++){
    let n = numbers[i];
    if (n === 0) break; // 0 들어오면 종료

    let answer = solution(numbers[i]);
    console.log(answer);
}

function solution(n) {
    // 2n까지 진행 필요
    let size = 2 * n;
    let arr = Array(size+1).fill(true);

    // 0과 1은 소수가 아니므로 제외
    arr[0] = false;
    arr[1] = false;

    for(let i=2; i*i<=size ;i++){
        // 소수가 아닌 값은 제외
        if (arr[i] === false) continue;

        for(let j=i*i; j<=size; j+=i){
            arr[j] = false;
        }
    }

    // n보다 크고 2n보다 작거나 같은 소수의 개수를 센다
    let count = 0;
    for (let i = n + 1; i <= size; i++) {
        // 소수가 몇개인지 세는 구간
        if (arr[i]) count++;
    }

    return count
}