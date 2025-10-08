const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input[0];

const graph = [];

for (let i = 0; i < num; i++) {
  graph[i] = [];
  for (let j = 0; j < num; j++) {
    graph[i][j] = input[i + 1][j];
  }
}

const visited_colorBlind = Array.from({ length: num }, () =>
  Array(num).fill(false)
);
const visited_nonColorBlind = Array.from({ length: num }, () =>
  Array(num).fill(false)
);

let count_colorBlind = 0;
let count_nonColorBlind = 0;

isColorBlind = false;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(i, j, num, visited, isColorBlind) {
  const queue = [];
  queue.push([i, j]);
  visited[i][j] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // 범위 체크
      if (nx < 0 || nx >= num || ny < 0 || ny >= num) continue;

      if (visited[nx][ny]) continue;

      // 색깔 체크
      const currentColor = graph[x][y];
      const nextColor = graph[nx][ny];
      let isSameColor = false;
      if (isColorBlind) {
        if (currentColor === "B" && nextColor === "B") {
          isSameColor = true;
        } else if (
          (currentColor === "R" || currentColor === "G") &&
          (nextColor === "R" || nextColor === "G")
        ) {
          isSameColor = true;
        }
      } else {
        isSameColor = currentColor === nextColor;
      }

      if (isSameColor) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

// 비색약
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visited_nonColorBlind[i][j]) {
      bfs(i, j, num, visited_nonColorBlind, false);
      count_nonColorBlind++;
    }
  }
}

// 색약
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visited_colorBlind[i][j]) {
      bfs(i, j, num, visited_colorBlind, true);
      count_colorBlind++;
    }
  }
}

console.log(count_nonColorBlind, count_colorBlind);
