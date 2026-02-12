const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

// 위 버려 - 아래로 옮겨 - 위 버려 - ...
let cards = [];
for (let i = 1; i <= n; i++) {
    cards.push(i);
}

let tryNum = 1;
let front = 0;
while (cards.length - front > 1) {
    if (tryNum % 2 !== 0) {
        front++;
    }
    else {
        cards.push(cards[front]);
        front++;
    }
    tryNum++;
}

console.log(Number(cards[front]));