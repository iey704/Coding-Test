const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0];
let array = input.splice(1,num);
let stack = [];
let sum = 0;

for(let i=0; i<num; i++){
    let number = Number(array[i]);
    if(number!= 0){
        stack.push(number);
    }
    else{
        stack.pop();
    }
}

for (let i=0; i<stack.length; i++){
    sum += stack[i];
}

console.log(sum);