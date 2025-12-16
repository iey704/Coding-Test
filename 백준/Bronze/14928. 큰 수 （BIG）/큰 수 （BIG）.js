const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString().trim();

// Number 타입이 다룰 수 있는 정수 범위는 16자리까지다.
let remain = 0;
for(let i=0; i<N.length; i++){
    let digit = Number(N[i]);
    remain = (remain * 10 + digit) % 20000303;
}

console.log(remain);