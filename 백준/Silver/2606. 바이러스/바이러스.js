const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num_com = Number(input[0]);
const num_pair = Number(input[1]);

const graph = [];
for (let i = 0; i <= num_com; i++) {
  graph[i] = [];
}

for (let i = 2; i < 2 + num_pair; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

for (let i = 1; i <= num_com; i++) {
  graph[i].sort((a, b) => a - b);
}

const visited = Array(num_com + 1).fill(false);
const result = [];

function dfs(start) {
    visited[start] = true;
    result.push(start);

    for(let i =0; i<graph[start].length; i++){
        const node = graph[start][i];
        if(!visited[node]){
            dfs(node);
        }
       
    }
}

dfs(1);
console.log(result.length - 1);
