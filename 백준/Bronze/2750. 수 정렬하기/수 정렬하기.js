const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

numbers.shift();
const answer = numbers.sort((a, b) => a - b);

for (let i = 0; i<answer.length; i++){
    console.log(answer[i])
}