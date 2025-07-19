const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 0; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [n1, n2] = input[i].split(" ").map(Number); // 배열화
  // 연결된 정점들 표시
  graph[n1].push(n2);
  graph[n2].push(n1);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// console.log(graph);

const visited_dfs = Array(N + 1).fill(false);
const visited_bfs = Array(N + 1).fill(false);

let result_dfs = [];
let result_bfs = [];

function dfs(v) {
  visited_dfs[v] = true;
  result_dfs.push(v); // 노드 진행 순서 저장

  for (let i = 0; i < graph[v].length; i++) {
    // 시작 노드 다음으로 진행할 노드 순서 정하기
    const next = graph[v][i];
    if (!visited_dfs[next]) {
      dfs(next); // 방문하지 않은 노드 차례일 때만 result에 넣어주기
    }
  }
}

function bfs(v) {
  const queue = []; // 다음에 방문할 노드를 기억 용도
  queue.push(v);
  visited_bfs[v] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    result_bfs.push(node); // 노드 진행 순서 저장

    // 인접 노드들 순회
    for (let i = 0; i < graph[node].length; i++) {
      const neighbor = graph[node][i];
      if (!visited_bfs[neighbor]) {
        // 방문하지 않은 노드만 큐에 저장
        visited_bfs[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

dfs(V);
console.log(result_dfs.join(" "));

bfs(V);
console.log(result_bfs.join(" "));
