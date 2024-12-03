function solution(priorities, location) {
    var answer = 0;
    let i = 0;
    let answer_array = [];
    let max_prior = Math.max(...priorities);
    let indexed_prior = priorities.map((value,index)=>[value,index]);
    
    while (indexed_prior.length > 0) {
        if (indexed_prior[i][0] === max_prior) {
            answer_array.push(indexed_prior[i]); 
            indexed_prior.splice(i, 1);          
            
            if (indexed_prior.length > 0) {
                max_prior = Math.max(...indexed_prior.map(item => item[0]));
            }

            if (i >= indexed_prior.length) {
                i = 0;
            }
        } else {
            i++;
            if (i >= indexed_prior.length) {
                i = 0; 
            }
        }
    }
    
    for(let i=0;i<answer_array.length;i++){
        if(location === answer_array[i][1]) {
            answer = i+1;
        }
    }

    return answer;
}