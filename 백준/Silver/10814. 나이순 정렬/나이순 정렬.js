const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");

const N = Number(input[0]);

const array = [];
for(let i=1; i<=N; i++){
    const [age, name] = input[i].split(" ");
    array.push({age: Number(age), name: name}); 
}

answer = array.sort((a,b)=>a.age-b.age);

for(let i=0; i<N; i++){
    console.log(answer[i].age, answer[i].name);
}