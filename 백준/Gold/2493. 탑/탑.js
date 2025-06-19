const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let top_arr = input[1].split(" ").map(Number);

// 0 1 2 3 4
// 6 9 5 7 4

const answer = Array(num).fill(0);
const stack = [];

for (let i = 0; i < num; i++) {
    while (stack.length > 0 && top_arr[stack[stack.length - 1]] < top_arr[i]) {
        stack.pop();
    }
    if (stack.length > 0) {
        answer[i] = stack[stack.length - 1] + 1; 
    } 
    stack.push(i);
}

console.log(answer.join(" "));