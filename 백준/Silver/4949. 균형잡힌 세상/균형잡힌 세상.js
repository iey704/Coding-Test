const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let index = 0;
while (index < input.length) {
    let sentence = input[index];
    let stack = [];
    let isBalanced = true;
    
    // 온점 한 글자만 있으면 종료
    if (sentence === '.') break;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == '(') {
            stack.push('(');
        }
        else if (sentence[i] == ')') {
            if (stack.pop() !== '(') {
                isBalanced = false;
                break;
            }
        }
        else if (sentence[i] == '[') {
            stack.push('[');
        }
        else if (sentence[i] == ']') {
            if (stack.pop() !== '[') {
                isBalanced = false;
                break;
            }
        }
    }

    if (stack.length !== 0) {
        isBalanced = false;
    }

    console.log(isBalanced ? 'yes' : 'no');
    index++;
}