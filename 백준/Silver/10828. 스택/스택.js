const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// console.log(input)

let array = []
let result = []

for(let i = 1; i<input.length; i++){
    if(input[i].includes('push')){
        const value = parseInt(input[i].match(/\d+/)?.[0], 10);
        array.push(value)
    }
    else if(input[i] === ('pop')){
        if(array.length === 0){
            result.push(-1)
        }
        else{
            result.push(array.pop())
        }
    }
    else if(input[i] === ('size')){
        result.push(array.length)
    }
    else if(input[i] === ('empty')){
        if(array.length === 0){
            result.push(1)
        }
        else{
            result.push(0)   
        }
    }
    else if(input[i] === ('top')){
        if(array.length === 0){
            result.push(-1)
        }
        else{
            result.push(array[array.length - 1]);
        }
    }
}

console.log(result.join('\n'));