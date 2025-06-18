const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const num1 = input[0];
const num2 = input[1];

let gcd = GCD(num1,num2)
console.log(gcd)

let lcm = LCM(num1,num2)
console.log(lcm)

function GCD(n1,n2) {
    while(n2){
        const temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    return n1;
}

function LCM(n1,n2){
    return (n1 * n2) / GCD(n1, n2)
}