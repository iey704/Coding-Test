const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");
const test_num = input[0];

let index = 1;
let sticker = [];
for (let i = 1; i <= test_num; i++) {
  const col = input[index++];
  const row1 = input[index++].split(" ").map(Number);
  const row2 = input[index++].split(" ").map(Number);
  sticker = [row1, row2];

  result = findMax(col, sticker);
  console.log(result);
}

function findMax(col,sticker) {
  const dp = Array.from({ length: 2 }, () => Array(col).fill(0));

  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];

  if (col > 1) {
    // 초기값의 대각선 값을 더한 값 구하기
    dp[0][1] = sticker[0][1] + dp[1][0];
    dp[1][1] = sticker[1][1] + dp[0][0];
  }

  // 열 2번째부터는 루트 2가지를 비교
  // 그리고 처음으로 위쪽을 선택했을 때 혹은 아래쪽을 선택했을 때 모두 구한 후 최대값 비교
  for(let i=2; i<col; i++){
    dp[0][i] = sticker[0][i] + Math.max(dp[1][i-1],dp[1][i-2]);
    dp[1][i] = sticker[1][i] + Math.max(dp[0][i-1],dp[0][i-2]);
  }

  return Math.max(dp[0][col-1], dp[1][col-1]);
}
