const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let relationship = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [u, f] = input[i].split(' ').map(Number);
    relationship[u].push(f);
    relationship[f].push(u);
}

let minDist = Infinity;
let minPerson = 0;

for (let j = 1; j <= n; j++) {
    let baconDist = findBacon(j, relationship);

    if (baconDist < minDist) {
        minDist = baconDist;
        minPerson = j;
    }
}

console.log(minPerson)

function findBacon(user, relationship) {
    let queue = [user];
    let dist = new Array(n + 1).fill(-1);
    dist[0] = 0
    let sum = 0;
    while (queue.length > 0) {
        let current = queue.shift();
        for (next of relationship[current]) {
            if (dist[next] === -1) {
                dist[next] = dist[current] + 1;
                sum += dist[next];
                queue.push(next);
            }
        }
    }
    return sum;
}