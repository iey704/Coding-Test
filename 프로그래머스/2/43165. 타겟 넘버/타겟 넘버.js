class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }

    addChildren(numbers, index = 0) {
        if (index < numbers.length) {
            // 왼쪽, 오른쪽 자식 노드를 설정
            this.leftNode = new Node(numbers[index]);
            this.rightNode = new Node(-numbers[index]);
            
            // 재귀함수 호출
            this.leftNode.addChildren(numbers, index+1);
            this.rightNode.addChildren(numbers, index+1);
        }
    }
}

function solution(numbers, target) {
    let answer = 0;
    let visited_node = [];
    
    const root = new Node(0);
    root.addChildren(numbers); // 배열 -> 트리 구조
    
    function DFSPreorder(node) {
        // 스택에 요소 추가
        visited_node.push(node.data);
        
        if (!node.leftNode && !node.rightNode) {  // 리프 노드일 때
            let sum = 0;
            // 배열 요소 합한 값 구하기
            visited_node.forEach(value => {
                sum += value;
            });
            
            if (sum === target) {
                answer++;
            }
        }

        if (node.leftNode) DFSPreorder(node.leftNode, visited_node);  // 왼쪽으로 탐색
        if (node.rightNode) DFSPreorder(node.rightNode, visited_node);  // 오른쪽으로 탐색

        // 되돌아올 때 스택에서 요소 제거
        visited_node.pop();  
    }

    DFSPreorder(root);
    
    return answer;
}