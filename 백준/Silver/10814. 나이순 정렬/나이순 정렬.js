const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim("").split("\n");

const N = Number(input[0]);

const array = [];
for(let i=1; i<=N; i++){
    const [age, name] = input[i].split(" ");
    // 객체보단 2차원 배열: 메모리 최적화
    array.push([Number(age),name]); 
}

// 원본 배열 직접 정렬: 나이 기준
array.sort((a,b)=>a[0]-b[0]);

// 결과도 한 번에 출력
const result = [];
for(let i=0; i<N; i++){
    result.push(`${array[i][0]} ${array[i][1]}`);
}
console.log(result.join('\n'));
