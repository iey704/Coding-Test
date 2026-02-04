const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);

let queue = [];
queue.push([n, 0]); // 현재 위치, 이동 횟수

let visited = new Array(k + 1).fill(false); // 1차원 방문 배열
visited[n] = true;

while (queue.length > 0) {
    let [currentPos, count] = queue.shift();

    // 목적지 도착하면 stop
    if (currentPos === k) {
        console.log(count);
        break;
    }

    const operations = [currentPos - 1, currentPos + 1, currentPos * 2];

    for (let i = 0; i < 3; i++) {
        const next = operations[i];
        // 0 ≤ N ≤ 100,000
        if (next >= 0 && next <= 100000 && !visited[next]) {
            visited[next] = true;
            queue.push([next, count + 1]);
        }
    }
}