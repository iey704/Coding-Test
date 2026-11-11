def solution(progresses, speeds):
    answer = []
    time = []
    p = 0
    s = 0
    
    for i in range(len(progresses)):
        p = 100-progresses[i]
        s = p / speeds[i]
        if s != int(s):
            s = int(s)+1
        time.append(s)
        
    count = 1   
    max = time[0]
    # [7,3,9]
    # [5,10,1,1,20,1]
    for j in range(1, len(time)):
        if time[j] <= max:
            count = count + 1
        else:
            answer.append(count)
            max = time[j]
            count = 1    
            
    answer.append(count)
            
    return answer