const fs = require("fs");
const num = fs.readFileSync("/dev/stdin").toString().trim();

let layer = 1; // 중앙 "1"방 포함
let maxNum = 1; 

while (maxNum < num) {
    // 패턴 찾기(증가하는 규칙 or 반복되는 게 있나)
    maxNum += 6 * layer; // 현재 층까지 포함된 최대 방 번호
    layer++;
}

console.log(layer);