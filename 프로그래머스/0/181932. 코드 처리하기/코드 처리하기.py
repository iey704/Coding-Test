def solution(code):
    mode = 0
    idx = 0
    ret = []
    
    for char in code:
        if mode == 0:
            if char != "1" and idx%2 == 0:
                ret.append(char)    
            elif char == "1":
                mode = 1
        else:
            if char != "1" and idx%2 != 0:
                ret.append(char)    
            elif char == "1":
                mode = 0
        idx+=1

    return("".join(ret) if len(ret) else "EMPTY")