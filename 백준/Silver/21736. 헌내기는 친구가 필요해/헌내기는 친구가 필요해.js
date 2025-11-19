const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(""));
}
// console.log(arr);

let start_x, start_y;
// 현재 위치 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === "I") {
      start_x = i;
      start_y = j;
    }
  }
}
// console.log(start_x, start_y);

const visited = Array.from(Array(N), () => Array(M).fill(false));

let queue = [];
queue.push([start_x, start_y]);
let answer = 0;
// 상하좌우 이동
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 이동 시 좌표 범위를 벗어나는지 체크하고 해당한다면 다음 방향으로 이동
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    // 벽일 때는 건너뛰기
    if (arr[nx][ny] === "X") continue;
    // 이미 방문했으면 건너뛰기
    if (visited[nx][ny]) continue;
    // 사람을 만나면 count 1 증가
    if (arr[nx][ny] === "P") answer += 1;

    visited[nx][ny] = true;
    queue.push([nx, ny]);
  }
}

console.log(answer === 0 ? "TT" : answer);
