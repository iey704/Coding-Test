const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

let map = [];
for (let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
}

let x = 0, y = 0;
let visited = Array.from({ length: n }, () => new Array(n).fill(false));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let answer = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < map.length; j++) {
        // 방문하지 않은 집일 때만 bfs 돌기
        if (map[i][j] === 1 && !visited[i][j]) {
            answer.push(bfs(i, j));
        }
    }
}

// 정답 출력
console.log(answer.length);
answer.sort((a, b) => a - b);
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}

// BFS 함수
function bfs(x, y) {
    let count = 1;
    let queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length > 0) {
        let [xx, yy] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = xx + dx[i];
            let ny = yy + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && map[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
                count++;
            }
        }
    }
    return count;
}