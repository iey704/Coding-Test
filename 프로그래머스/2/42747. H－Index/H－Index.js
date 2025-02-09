function solution(citations) {
    var answer = 0;
    
    citations = citations.sort((a,b)=>{
        return b-a;
    });
    // console.log(citations);
    
    for(let i=0;i<citations.length;i++){
        if(i+1<= citations[i]){
            ++answer;
        }
    }
    
    return answer;
}