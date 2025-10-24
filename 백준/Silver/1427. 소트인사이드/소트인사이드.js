const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0].toString();

const array = [...num];

const sorted_arr = array.sort((a, b) => b - a);
console.log(sorted_arr.join(""));
