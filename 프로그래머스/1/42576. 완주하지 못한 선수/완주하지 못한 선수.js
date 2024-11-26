// function solution(participant, completion) {
//     var answer = '';

//     const hashMap_p = new Map();
//     participant.forEach((value) => {
//         const count = hashMap_p.get(value) || 0;
//         hashMap_p.set(value, count + 1);
//     });
    
//     const hashMap_c = new Map();
//     completion.forEach((value) => {
//         const count = hashMap_c.get(value) || 0;
//         hashMap_c.set(value, count + 1);
//     });
    
//     for (const [key, count] of hashMap_p) {
//         const completionCount = hashMap_c.get(key) || 0;
//         if (count > completionCount) {
//             answer = key;
//             break;
//         }
//     }
    
//     return answer;
// }

function solution(participant, completion) {
    const hashMap = new Map();

    participant.forEach((value) => {
        const count = hashMap.get(value) || 0;
        hashMap.set(value, count + 1);
    });

    completion.forEach((value) => {
        const count = hashMap.get(value);
        if (count === 1) {
            hashMap.delete(value);
        } else {
            hashMap.set(value, count - 1);
        }
    });

    for (const [key] of hashMap) {
        return key;
    }
}