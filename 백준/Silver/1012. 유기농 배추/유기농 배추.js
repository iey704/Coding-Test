const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const test_num = input[0];
let line = 1;
// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function dfs(x, y, graph, N, M) {
  // 현재 위치 방문 처리
  graph[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위 내부 && 배추가 있다면 계속 탐색
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && graph[ny][nx] === 1) {
      dfs(nx, ny, graph, N, M);
    }
  }
}
for (let t = 0; t < test_num; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number);

  // 2차원 배열 초기화
  const graph = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 위치 입력
  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    graph[y][x] = 1;
  }

  let count = 0;

  // DFS 실행
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[y][x] === 1) {
        dfs(x, y, graph, N, M);
        count++; 
      }
    }
  }

  console.log(count);
}