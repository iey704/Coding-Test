const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0];
let array = input.splice(1,num);

for (let i = 0; i < num; i++) {
    let isYes = true;
    let stack = [];
    let str = array[i];
  
    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if (char === '(') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          isYes = false;
          break;
        }
        stack.pop();
      }
    }
    if (stack.length !== 0) isYes = false;
    
    console.log(isYes ? "YES" : "NO");
  }
