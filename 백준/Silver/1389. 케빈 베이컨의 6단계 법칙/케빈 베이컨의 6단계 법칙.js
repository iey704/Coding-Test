const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 각자 연결된 친구 넣기
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [user, friend] = input[i].split(' ').map(Number);
    graph[user].push(friend);
    graph[friend].push(user);
}

let minBacon = Infinity;
let minPerson = 0;
for (let j = 1; j < n + 1; j++) {
    let totalDist = findBacon(j, graph);

    if (totalDist < minBacon) {
        minBacon = totalDist;
        minPerson = j;
    }
}
console.log(minPerson);

// 케빈 베이컨의 수가 가장 작은 사람 (if, 여러명일 경우 번호가 가장 작은 사람)
function findBacon(user, graph) {
    let queue = [user];
    let dist = new Array(n + 1).fill(-1); // 거리 저장
    dist[user] = 0;

    let sumBacon = 0
    while (queue.length > 0) {
        let current = queue.shift();
        for (let next of graph[current]) {
            if (dist[next] === -1) {
                dist[next] = dist[current] + 1;
                sumBacon += dist[next];
                queue.push(next);
            }
        }
    }
    return sumBacon;
}