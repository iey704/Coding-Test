function solution(nums) {
    var answer = 0;
    var maxNum = nums.length / 2;
    
    const arr = new Set(nums);
    const uniqueArr = [...arr];
    console.log(uniqueArr);
    
    if(uniqueArr.length === maxNum){
        answer = uniqueArr.length;
    } else if(uniqueArr.length > maxNum) {
        answer = maxNum;
    } else if(uniqueArr.length < maxNum) {
        answer = uniqueArr.length;
    } else {
        answer = uniqueArr.length;
    }     
    
    return answer;
}