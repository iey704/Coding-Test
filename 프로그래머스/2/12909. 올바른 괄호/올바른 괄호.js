function solution(s){
    var answer = true;
    let queue = [];

    for(let i=0; i<s.length; i++){
        
        if(s[0]===')'){
            answer = false;
            break;
        } else{
            if(s[i]==='('){
                queue.push(s[i]);
            } else {
                queue.shift();
            }
        }
    }
    
    if(queue.length != 0) answer = false;

    return answer;
}