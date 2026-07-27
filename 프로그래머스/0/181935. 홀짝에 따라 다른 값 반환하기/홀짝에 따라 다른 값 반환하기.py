def solution(n):
    answer_even = 0
    answer_odd = 0
    
    if n%2 != 0:
        for i in range(n+1):
            if i%2 != 0:
                answer_odd += i
        return answer_odd
    else:
        for i in range(n+1):
            if i%2 == 0:
                answer_even += i**2
        return answer_even