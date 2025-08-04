const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const test_num = Number(input[0]);

let line = 1;

for(let i=0; i<test_num; i++){
    const N = Number(input[line]);
    line++;
    
    const array = input[line].split(" ").map(Number);
    line++; 
        
    let cycles = 0;
    let visited = new Array(N + 1).fill(false);
    
    for(let start = 1; start <= N; start++){
        if(!visited[start]){
            cycles++;
            let current = start;
            while(!visited[current]){
                visited[current] = true;
                current = array[current - 1];
            }
        }
    }
    
    console.log(cycles); 
}