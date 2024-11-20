function solution(s){
    var answer = true;
    var number = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            number++;
        }
        else if(s[i]==")"){
            number--;      
            if(number<0) return false;
        }        
    }
    
    if(number!=0) {
        return false;
    }
    else{
        return true;
    }
    
    return answer;
}