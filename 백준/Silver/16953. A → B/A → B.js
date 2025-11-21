const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);

let num = B;
let answer = 1;
while (num > 0) {
    if (num % 2 === 0) {
        num = num / 2;
        if (num < A) {
            answer = -1;
            break;
        }
        if (num == A) break;
        answer++;
        continue;
    }
    else {
        if (num % 10 == 1) {
            num = Math.floor(num / 10);
            if (num < A) {
                answer = -1;
                break;
            }
            if (num == A) break;
            answer++;
            continue;
        }
        else {
            answer = -1;
            break;
        }
    }
}

if (answer == -1) {
    console.log(answer);
}
else {
    console.log(answer + 1);
}