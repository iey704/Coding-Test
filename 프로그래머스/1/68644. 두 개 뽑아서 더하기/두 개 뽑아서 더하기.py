def solution(numbers):
    answer = []
    n = len(numbers)
    
    for i in range(n):
        for j in range(i+1,n):
            sum = numbers[i] + numbers[j]
            answer.append(sum)
    
    return sorted(list(set(answer)))