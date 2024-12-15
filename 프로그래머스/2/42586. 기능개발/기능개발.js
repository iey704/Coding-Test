function solution(progresses, speeds) {
    var answer = [];
    let remainTimes = [];
    let count = 0;
    
    for(let i=0;i<progresses.length;i++){
        let remainTime = Math.ceil((100-progresses[i]) / speeds[i]);
        remainTimes.push(remainTime);
    }

    let maxTime = remainTimes[0];
    
    for(let j=0; j<remainTimes.length; j++){
        if(maxTime >= remainTimes[j]){
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxTime = remainTimes[j];
        }
       
    }
    answer.push(count);
    return answer;
}