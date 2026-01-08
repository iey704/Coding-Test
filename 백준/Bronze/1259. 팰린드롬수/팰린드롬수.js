const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.trim());;
// 121 
// 12421
// 다 쪼개서 배열에 넣고 데칼코마니인지 확인
for (let i = 0; i < input.length; i++) {
    let split_input = input[i].split('');
    
    if (input[i] === '0') continue;
    
    let is_check = true;
    for (let j = 0; j < split_input.length / 2; j++) {
        // 짝끼리 비교
        if (split_input[j] !== split_input[split_input.length - 1 - j]) {
            is_check = false;
            break;
        }
    }

    if (is_check) {
        console.log('yes');
    } else {
        console.log('no');
    }
}