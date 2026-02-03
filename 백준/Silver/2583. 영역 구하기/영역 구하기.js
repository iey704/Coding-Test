const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// m: 세로(row) / n: 가로(column)
const [m, n, k] = input[0].split(' ').map(Number);

// n*m 격자
let region = Array.from({ length: m }, () => Array(n).fill(0));
for (let i = 1; i <= k; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    // 격자 형태로 변환
    for (let i = x1; i < x2; i++) {
        for (let j = y1; j < y2; j++) {
            // x:n:column / y:m:row
            region[j][i] = 1;
        }
    }
}

let visited = Array.from({ length: m }, () => Array(n).fill(false));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = [];
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // 채워지지 않은 영역 개수 세기
        if (region[i][j] === 0 && !visited[i][j]) {
            answer.push(bfs(i, j));

        }
    }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
console.log(answer.join(' '));

function bfs(i, j) {
    let queue = [[i, j]];
    visited[i][j] = true;
    let count = 0;

    while (queue.length > 0) {
        let [xx, yy] = queue.shift();
        count++;

        for (let l = 0; l < 4; l++) {
            let nx = xx + dx[l];
            let ny = yy + dy[l];

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && region[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
    return count;
}