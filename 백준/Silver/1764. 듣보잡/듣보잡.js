// https://www.acmicpc.net/problem/1764

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.trim());

const [n,m] = input[0].split(' ').map(Number);
let noListenSeen = {};

// 듣도 못한 사람
for(let i=1; i< n+1; i++){
    let noListenName = input[i];
    if(noListenSeen[noListenName]) noListenSeen[noListenName]++;
    else noListenSeen[noListenName] = 1;
}
// 보도 못한 사람
for(let j=n+1; j<=n+m; j++){
    let noSeenName = input[j];
    if(noListenSeen[noSeenName]) noListenSeen[noSeenName]++;
    else noListenSeen[noSeenName] = 1;
}

// 듣보잡 = 겹치는 사람
let answer = [];
for (let name in noListenSeen) {
    if (noListenSeen[name] >= 2) {
        answer.push(name);
    }
}
answer.sort();
console.log(answer.length);
for(let k=0; k<answer.length; k++){
    console.log(answer[k]);
}