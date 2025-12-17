const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);
const num = Number(input[0]);

let arr = [];
for (let i = 0; i < num; i++) {
    arr.push(Number(input[i + 1]));
}

// 1. 산술 평균
let answer_1 = 0;
for (let i = 0; i < num; i++) {
    answer_1 = answer_1 + arr[i];
}

console.log(Math.round(answer_1 / num) + 0); // 소수점 이하 첫째 자리에서 반올림

// 2. 중앙값
let answer_2 = 0;
arr.sort((a, b) => a - b); 
answer_2 = arr[Math.floor(num / 2)]
console.log(answer_2);


// 3. 최빈값
let answer_3 = 0;
// 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력
// 빈 객체와 빈 배열을 만든다.
// 문자열에 대해 반복문을 돌면서 만약 객체에 해당 값이 있으면 +1을 아니면 1을 저장한다.
// 저장된 객체의 value 중에서 최댓값을 구한다.
// 객체를 돌면서 최댓값과 value가 같은 경우 배열에 저장한다.
// 배열의 길이가 1보다 큰 경우 오름차순으로 정렬한 후 두 번째로 작은 값을 리턴한다.
// 아니면 0번째 값을 리턴한다.

let map = {};
let modes = [];
// 1) 빈도 수 세기
// map[arr[i]] = ... 이렇게 대괄호 []로 접근하면 객체의 속성으로 저장됨
for (let i = 0; i < num; i++) {
    if (map[arr[i]]) map[arr[i]]++;
    else map[arr[i]] = 1;
}
// console.log(map);
// 2) 최댓값 구하기
// 객체 값만 배열로 추출한 후 개별 인자로 만든 후 최댓값만 반환
let max_freq = Math.max(...Object.values(map));

// 3) 최빈값을 배열에 저장
for (let key in map) { // 이때, key는 문자열
    if (map[key] === max_freq) modes.push(Number(key));
}
// 4) 정렬 후 선택
// 최빈값으로 채택된 값이 여러 개일 경우, 배열에 담긴 값을 정렬해준 뒤 채택
modes.sort((a, b) => a - b);
answer_3 = modes.length > 1 ? modes[1] : modes[0];

console.log(answer_3);

// 4. 범위
let answer_4 = 0;
let min = Infinity, max = -Infinity;
for (let i = 0; i < num; i++) {
    if (arr[i] <= min) min = arr[i];
    if (arr[i] >= max) max = arr[i];
}
// console.log('min:',min, 'max:',max);
answer_4 = max - min;
console.log(answer_4);