const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.trim());

const testNum = Number(input[0]);
let index = 1; // 줄 이동용 인덱스
for (let i = 0; i < testNum; i++) {
    let arrNum = Number(input[index]);
    index++;

    let clothes = {};
    for (let j = 0; j < arrNum; j++) {
        let [name, type] = input[index].split(' ');
        // 옷 종류 카운트: 없을 경우 0부터 시작 있을 경우 +1
        if (!clothes[type]) clothes[type] = 0;
        clothes[type]++;

        index++;
    }
    // console.log(clothes);

    // 조합 계산: (각 종류별 개수 + 1)을 곱한 후 아무것도 안 입는 경우 제외
    let answer = 1;
    for (let type in clothes) {
        answer *= (clothes[type] + 1);
    }
    answer -= 1;

    console.log(answer);
}