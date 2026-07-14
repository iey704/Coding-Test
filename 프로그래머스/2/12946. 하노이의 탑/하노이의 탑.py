def hanoi(start, mid, end, n):
    if n == 1:
        return [[start, end]]
    else:
        return hanoi(start, end, mid, n-1)+[[start,end]]+hanoi(mid, start, end, n-1)

def solution(n):
    return hanoi(1, 2, 3, n)