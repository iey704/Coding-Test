function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0); //다리 위 상태
    let totalWeight = 0; //다리 위 트럭의 총 무게

    while (bridge.length > 0) {
        time++;
        totalWeight -= bridge.shift(); //다리의 맨 앞 트럭이 나감
        
        if (truck_weights.length > 0) {
            //대기 트럭의 무게와 현재 다리 위 총 무게를 비교
            if (totalWeight + truck_weights[0] <= weight) {
                const nextTruck = truck_weights.shift(); //대기 트럭을 다리 위로 올림
                bridge.push(nextTruck);
                totalWeight += nextTruck;
            } else {
                bridge.push(0);
            }
        }
    }
    
    return time;
}