function solution(clothes) {
    var answer = 1;
    var clothesMap = new Map();
    
    clothes.forEach(([item,category])=>{
        const count = clothesMap.get(category) || 0;
        clothesMap.set(category, count+1);
    })
    
    console.log(clothesMap);
    
    for(const value of clothesMap.values()){
        answer *= value+1;
    }

    return answer-1;
}