const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let rect = [];
rect[0] = 1;
rect[1] = 1;

for(let i=2; i<=n; i++){
    rect[i] = (rect[i-1] + rect[i-2]) % 10007;
}

console.log(rect[n]);