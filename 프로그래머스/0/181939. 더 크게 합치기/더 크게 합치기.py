def solution(a, b):
    answer = 0
    answer_1 = int(str(a)+str(b))
    answer_2 = int(str(b)+str(a))
    
    print(answer_1)
    print(answer_2)
    
    if answer_1 > answer_2:
        answer = answer_1
    else:
        answer = answer_2
    
    return answer