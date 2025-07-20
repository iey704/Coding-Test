const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num_com = Number(input[0]);
const num_pair = Number(input[1]);

const graph = [];
for(let i=0; i<=num_com; i++){
    graph[i] = [];
}

for (let i = 2; i < 2 + num_pair; i++) {
    const [n1, n2] = input[i].split(" ").map(Number);
    graph[n1].push(n2);
    graph[n2].push(n1);
}

const visited = Array(num_com+1).fill(false);
const result = [];

function bfs(start){
    const queue = [];
    queue.push(start);
    visited[start] = true;

    while(queue.length>0){
        const node = queue.shift();
        result.push(node);  


        for(let i=0; i<graph[node].length; i++){
            const neighbor = graph[node][i];
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

}

bfs(1);
console.log(result.length-1);