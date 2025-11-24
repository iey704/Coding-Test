const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [num, str] = input.split("\n");

let arr = [];
arr = str.split(" ").map(Number);

// console.log(arr);

// 오름차순 정렬
const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
let map = {};

// 정렬된 배열을 돌면서 크기 비교를 위한 객체 매핑
for (let i = 0; i < num; i++) {
  const item = sortedArr[i];
  map[item] = i;
}

// console.log(map);

let answer = [];
for (let i = 0; i < num; i++) {
  answer.push(map[arr[i]]);
}

console.log(answer.join(" "));
