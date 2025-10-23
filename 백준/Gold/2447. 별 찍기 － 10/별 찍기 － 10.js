const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");
const num = Number(input[0]);
const output = Array.from({ length: num }, () => Array(num).fill(" "));

function pattern(N, start_row, start_col, output) {
  if (N === 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i == 1 && j == 1) output[start_row + i][start_col + j] = " ";
        else output[start_row + i][start_col + j] = "*";
      }
    }
    return;
  }
  // N이 3보다 클 때
  else {
    const size = N / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;
        else pattern(N / 3, start_row + i * size, start_col + j * size, output);
      }
    }
  }
}

pattern(num, 0, 0, output);

for (let i = 0; i < num; i++) {
  console.log(output[i].join(""));
}
