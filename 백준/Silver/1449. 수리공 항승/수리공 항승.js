const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, L] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
// 가장 왼쪽에서 정수만큼 떨어진 거리만 물이 샌다.
// 길이가 L인 테이프가 무한개 존재한다. 
// 물을 막을 때, 해당 위치의 좌우 0.5만큼 간격을 줘야 물이 다시 안 샌다.
// 필요한 테이프의 최소 개수를 구하자. (테이프는 겹쳐서 붙이기 가능)

let count = 0;
let queue = [];
// queue를 선언 -> 배열을 돌면서 (차이값 < 테이프값)일 때, queue에 넣기
// queue의 마지막값 - 첫번째값이 테이프값 이상이 될 때, 더이상 넣어주지 않음.
// 그리고 queue에서 이전값들까지는 빼버림. 그리고 count 1 올려.
for (let i = 0; i < N; i++) {
    queue.push(arr[i]);
    let comp = queue[queue.length - 1] - queue[0];
    if (comp >= L) {
        count++;
        // for (let j = 0; j < i; j++) queue.shift();
        queue = [arr[i]];

    }
}

if (queue.length != 0) count++;
// console.log('remain: ', queue);

console.log(count);