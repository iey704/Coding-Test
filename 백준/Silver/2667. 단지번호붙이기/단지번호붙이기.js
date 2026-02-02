const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

let map = [];
for (let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}

let visited = Array.from({ length: n }, () => Array(n).fill(false));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = [];
for (let i = 0; i < n; i++) {
    for (j = 0; j < map.length; j++) {
        if (map[i][j] === 1 && !visited[i][j]) {
            answer.push(bfs(i, j));
        }
    }
}

function bfs(x, y) {
    let queue = [];
    let count = 1;

    visited[x][y] = true;
    queue.push([x, y]);

    while (queue.length > 0) {
        let [xx, yy] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = xx + dx[i];
            let ny = yy + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && map[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                count++;
            }
        }
    }
    return count;
}

answer.sort((a, b) => a - b);
console.log(answer.length);
answer.forEach(c => console.log(c));