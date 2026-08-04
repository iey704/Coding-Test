def swap(w,h):
    temp = w
    w = h
    h = temp
    return w,h

def solution(sizes):
    answer = 0
    temp = 0
    for i,(w,h) in enumerate(sizes):
        if w < h:
            w,h = swap(w,h)
            sizes[i] = [w, h]
            
    max_w = sizes[0][0]
    max_h = sizes[0][1]
    for w,h in sizes:
        if w > max_w:
            max_w = w
        if h > max_h:
            max_h = h
            
    return max_w*max_h