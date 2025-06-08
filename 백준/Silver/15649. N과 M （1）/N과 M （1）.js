const fs = require("fs");
const number = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = number[0].split(" ").map(Number);

let N = input[0];
let M = input[1];

function dfs(path) {
    if(path.length === M) {
        console.log(path.join(" "));
        return;
    }

    for(let i = 1; i <= N; i++){
        if(!path.includes(i)){
            dfs([...path,i]);
        }
    }
}

dfs([]);