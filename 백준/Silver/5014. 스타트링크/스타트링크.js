const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [F,S,G,U,D] = input.split(' ').map(Number);

const visited = new Array(F+1).fill(false);
const queue= [];

// 초기화
queue.push([S,0]);
visited[S] = true;

while (queue.length > 0) {
    const [current, count] = queue.shift();
    
    // 목표 지점 도달
    if (current === G) {
        console.log(count);
        return;
    }
    
    // 위로 이동
    const up = current + U;
    if (up <= F && !visited[up]) { // 범위 안이고, 방문 안 했으면
        visited[up] = true;
        queue.push([up, count + 1]);
    }

    // 아래로 이동
    const down = current - D;
    if(down >= 1 && !visited[down]){ 
        visited[down] = true;
        queue.push([down, count+1]);
    }
}

// 큐가 비었는데 목표 못 찾았을 때
console.log("use the stairs");