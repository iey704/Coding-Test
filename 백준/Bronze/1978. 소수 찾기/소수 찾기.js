const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const array = input[1].split(" ").map(Number);

let answer = 0;

function isPrime(num){
    if(num <= 1) { 
        return false;
    }
    for(let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

for(let i = 0; i<array.length; i++){
    if(isPrime(array[i]) === true){
        answer++;
    }
}

console.log(answer);