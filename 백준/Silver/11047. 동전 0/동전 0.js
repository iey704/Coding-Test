const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);
let coins = [];
for (let i = 1; i <= n; i++) {
  coins.push(Number(input[i]));
}
// 내림차순으로 변경해야 배열을 덜 돌게됨
coins.sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < n; i++) {
  if (k >= coins[i]) {
    let count = Math.floor(k / coins[i]);
    answer += count;
    k -= count * coins[i];
  }
}

console.log(answer);
