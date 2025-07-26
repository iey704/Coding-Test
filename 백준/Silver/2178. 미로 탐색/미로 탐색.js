const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = [];

// 그래프 생성
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split("").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const queue = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 내부 범위 체크
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      // 이동할 수 없는 칸인지 체크
      if (graph[ny][nx] === 0) continue;

      if (graph[ny][nx] === 1) {
        graph[ny][nx] = graph[y][x] + 1;
        queue.push([ny, nx]); // 다음 탐색
      }
    }
  }
}

bfs();
console.log(graph[N - 1][M - 1]);
