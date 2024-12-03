function solution(progresses, speeds) {
    var answer = [];
    var remainDay = [];
    
    for(let i=0;i<progresses.length;i++){
        remainDay.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    // console.log(remainDay);
    
    let maxDay = remainDay[0];
    let count = 0;
    for(let j=0;j<remainDay.length;j++){
        if(remainDay[j]<=maxDay){
            count++;
        }else{
            answer.push(count);
            count = 1;
            maxDay = remainDay[j];
        }
    }
    answer.push(count);
    
    return answer;
}