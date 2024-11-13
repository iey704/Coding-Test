function solution(maps) {
    const n = maps.length; // 행
    const m = maps[0].length; // 열

    let answer = 1;
    const visited = Array.from(Array(n), () => Array(m).fill(false)); // 방문 여부를 저장하는 배열 생성
    
    const queue = [];
    queue.push([0,0]); // 출발 지점을 큐에 저장
    visited[0][0] = true; // 출발 지점을 방문한 것으로 표시
    
    const dX = [0,0,-1,1];
    const dY = [-1,1,0,0];
    
    while (queue.length) {
        const size = queue.length; // 현재 큐의 길이를 저장하여 레벨을 고정
        for (let i=0; i<size; i++) {
            // 현재 탐색할 위치를 [curX, curY]에 할당
            const [curX,curY] = queue.shift();
            
            for (let j=0; j<4; j++) {
                // 상하좌우 방향으로 이동할 좌표 계산
                const x = curX+dX[j];
                const y = curY+dY[j];
                
                // 맵의 범위를 벗어나지 않고 1(길)일 경우에만 이동 가능
                if (x>=0 && x<n && y>=0 && y<m && maps[x][y]===1 && !visited[x][y]) {
                    if (x === n-1 && y === m-1) { // 목표 지점에 도달했을 경우
                        return ++answer;
                    }
                    queue.push([x,y]);
                    visited[x][y] = true; // 방문한 것으로 표시
                }
            }
        }
        ++answer; // 이동 거리 증가
    }
    
    // 목표 지점에 도착할 수 없을 때
    return -1;
}