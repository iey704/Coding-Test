function solution(array, commands) {
    var answer = [];
    for (let index = 0; index < commands.length; index++){
        let new_com = commands[index];
        
        let i = new_com[0];
        let j = new_com[1];
        let k = new_com[2];
        
        let new_arr = array.slice(i-1,j);
        new_arr.sort(function(a,b){
            return a - b;
        });

        answer.push(new_arr[k-1]);
    }
    return answer;
}