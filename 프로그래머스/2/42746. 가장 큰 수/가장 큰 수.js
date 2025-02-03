function solution(numbers) {
    
//     const dfs = (picked, unpicked) => {
//         if(unpicked.length === 0){
//             const num = picked.join('');
//             if(answer<num) answer=num;
//             return;
//         } 
            
//         else{
//             unpicked.forEach((num,idx)=>{
//                 dfs([...picked,num], [...unpicked.slice(0,idx),...unpicked.slice(idx+1)])
//             })
//         }
//     }
    
//     dfs([],numbers);
    
    // 숫자 -> 문자열로 변환 후 정렬
    numbers.sort((a,b)=>{
        let strA = a.toString();
        let strB = b.toString();
        // 더 큰 순서대로 정렬
        return (strB+strA) - (strA+strB);
    });
    
    // console.log(numbers);
    
    let answer = numbers.join('');
    // console.log(answer);
    
    return answer[0] === '0' ? '0' : answer;
}