const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1];

// 그리디 알고리즘: 범위 내 가능한지 여부만 따짐 -> 1차원 배열 내 범위 탐색
// 자신의 위치에서 거리가 K 이하인 햄버거만 먹을 수 있음.
// P의 index를 찾고 K 이하인 index 수집
// 채택된 H의 index 기억 필요
const visited = Array(N).fill(false);
let count = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] === "P") {
        // 자신의 위치에서 거리가 K이하인 범위(ex: K=2 => i-2,i-1,i+1,i+2)
        for (let j = i - K; j <= i + K; j++) {
            if (j < 0 || j >= N) continue; // 범위 벗어난 예외 처리
            if (arr[j] === 'H' && !visited[j]) {
                visited[j] = true;
                count++;
                break;
            }
        }
    }
}

console.log(count);