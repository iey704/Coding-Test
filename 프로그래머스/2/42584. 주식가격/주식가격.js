function solution(prices) {
    var answer = [];
    let priceCount = [];
    let time = 0;
    
//     while(prices.length > 0){   
//         priceCount = prices.shift();
//         let max = priceCount;
        
//         for(let i=0; i<prices.length;i++){
//             if(max>prices[i]) continue;
//             else time++;
//         }
//         // console.log(priceCount);
//         // console.log(prices);
//         // console.log('time: ',time);
//         answer.push(time);    
//         time = 0;
//     }
    
    for (let i = 0; i < prices.length; i++) {
        let time = 0;

        for (let j = i + 1; j < prices.length; j++) {
            time++; 
            if (prices[j] < prices[i]) {
                break;
            }
        }

        answer.push(time);
    }

    return answer;
}