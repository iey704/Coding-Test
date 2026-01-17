const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [m, n] = input[0].split(" ").map(Number);
let answer = 0;
let box = [];
let onePosition = [];

// 이중 배열 생성
for (let i = 1; i <= n; i++) {
  let input_s = input[i].split(" ").map(Number);
  box.push(input_s);
}

// 현재 박스 내 토마토 기준 방문 처리
let visited = Array.from({ length: n }, () => new Array(m).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] == 1) {
      // 다중 시작점을 표현해주기 위해서 위치뿐만 아니라 day 정보도 넣음.
      onePosition.push([i, j, 0]); // 행, 열, 날짜
      visited[i][j] = true;
    }
  }
}
// console.log("1의 위치: ", onePosition);
// console.log("방문 위치: ", visited);

let hasZeroValue = box.some((row) => row.includes(0));
let hasOneValue = box.some((row) => row.includes(1));
let maxDay = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

// 0이 있는지 확인(없으면 0 출력)
if (!hasZeroValue) answer = 0;
// 1이 있는지 확인(또는 -1로 둘러쌓인 0이 있는지 확인)(없으면 -1 출력)
else if (!hasOneValue) answer = -1;
else {
  // 1이 여러개여도 같은 날짜 내에서 루프가 돌 때, 순차적으로 큐에 시작점을 넣어주면 됨.
  // 1의 위치 -> 이동 -> 0인지 체크한 후, 1) 0->1로 변경 혹은 2) pass
  // 이동 시에는 범위 내에 존재하는지 체크 필요
  let index = 0;
  while (index < onePosition.length) {
    let [y, x, day] = onePosition[index++];
    maxDay = Math.max(maxDay, day);

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      // 범위 체크 && 방문 체크 && 익힘 여부 체크
      if (
        ny >= 0 &&
        ny < n &&
        nx >= 0 &&
        nx < m &&
        !visited[ny][nx] &&
        box[ny][nx] === 0
      ) {
        onePosition.push([ny, nx, day + 1]);
        visited[ny][nx] = true;
      }
    }
  }

  // 모든 0이 1로 바뀌었는지 확인 == -1로 둘러쌓인 0이 있는지 확인
  let hasUnripeTomato = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (box[i][j] == 0 && !visited[i][j]) {
        hasUnripeTomato = true;
        break;
      }
    }
    if (hasUnripeTomato) break; // 이중 for문의 경우 한 번 더 break
  }

  answer = hasUnripeTomato ? -1 : maxDay;
}

console.log(answer);
