const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0];
let formula = input.splice(1,1)[0].split("");
let array = input.splice(1,num).map(Number);
let map = {};

for(let i=0; i<num; i++){
    map[String.fromCharCode(65+i)] = array[i];
}

// console.log(map);

const stack = [];

for (let i = 0; i < formula.length; i++) {
  const token = formula[i];
  // 알파벳
  if (/^[A-Z]$/.test(token)) {
    stack.push(map[token]);
  } else {
    // 연산자
    const b = stack.pop();
    const a = stack.pop();
    let result;

    if (token === '+') {
        result = a + b;
    }
    else if (token === '-') {
        result = a - b;
    }
    else if (token === '*') {
        result = a * b;
    }
    else if (token === '/') {
        result = a / b;
    }

    stack.push(result);
  }
}

console.log(stack[0].toFixed(2));