const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num_of_friends = Number(input[0]);
const num_of_list = Number(input[1]);

const list = Array.from({ length: num_of_friends + 1 }, () => []);

// 친구 관계 입력
for (let i = 2; i < 2 + num_of_list; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  list[a].push(b);
  list[b].push(a);
}

const visited = Array(num_of_friends + 1).fill(false);
const distance = Array(num_of_friends + 1).fill(0);

// 시작: 상근이
const queue = [1];
visited[1] = true;
distance[1] = 0;

while (queue.length > 0) {
  const current = queue.shift();

  // 현재 사람의 친구들 확인
  for (const friend of list[current]) {
    // 아직 방문 안 했으면
    if (!visited[friend]) {
      visited[friend] = true;
      distance[friend] = distance[current] + 1;

      // 거리가 2 이하면 큐에 추가 (더 탐색)
      if (distance[friend] <= 2) {
        queue.push(friend);
      }
    }
  }
}

let count = 0;
for (let i = 2; i <= num_of_friends; i++) {
  if (distance[i] >= 1 && distance[i] <= 2) {
    count++;
  }
}

console.log(count);
