const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [min, sec] = input.split(":");
let total = Number(min) * 60 + Number(sec);
let count = 0;

// 1) 분 처리
count += Math.floor(total / 600); // 10분: count가 1회 이상 되지 않는 경우는 버림
total %= 600;

count += Math.floor(total / 60); // 1분
total %= 60;

// 2) 초 처리
if (total >= 30) {
    // 30초 이상일 때는 조리시작으로 대체하는게 최소의 횟수를 구하는데 적합함.
    count += 1;
    count += Math.floor((total - 30) / 10);
} else {
    // 10초 버튼으로 먼저 채우고 조리시작
    count += Math.floor(total / 10);
    count += 1;
}

console.log(count);