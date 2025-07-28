const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ");

const graph = [];
for (let i = 0; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(N + 1).fill(false);
let count = 0;

function dfs(start) {
  visited[start] = true; // 연관된 노드 방문 처리

  for (let i = 0; i < graph[start].length; i++) {
    const node = graph[start][i];

    if (!visited[node]) {
      dfs(node);
    }
  }
}

for(let i=1; i<=N; i++){
    if(!visited[i]){
        dfs(i);
        count++; // 연결된 노드의 무리 카운트
    }
}

console.log(count);