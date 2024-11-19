function bfs(startNode, computers, visited){
    const queue = [startNode];
    visited[startNode] = true;
    
    while(queue.length > 0){
        const node = queue.shift();
        for(let j=0;j<computers.length;j++){
            if(computers[node][j] === 1 &&!visited[j]){
                visited[j] = true;
                queue.push(j);
                console.log('visited: ',visited,'queue: ',queue);
            }
        }
    }
    
}

function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);

    for(let i=0; i<computers.length; i++){
        if(!visited[i]){
            bfs(i,computers,visited);
            answer++;
        }
    }
    
    return answer;
}