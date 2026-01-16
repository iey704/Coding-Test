const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.trim());;
const [n, m] = input[0].split(' ').map(Number);

let siteMap = {};
for (let i = 1; i <= n; i++) {
    let [site, pwd] = input[i].split(' ');
    siteMap[site] = pwd;
}

for (let j = n + 1; j < n + 1 + m; j++) {
    console.log(siteMap[input[j]]);
}