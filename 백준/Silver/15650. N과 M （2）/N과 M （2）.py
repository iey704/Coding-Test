import sys
input = sys.stdin.readline

def choose(picked, start, N, M): 
    if len(picked) == M:    
        print(' '.join(map(str, picked)))     
        return                                

    for num in range(start, N+1): # 범위: 현재 picked보다 큰 수들
        picked.append(num)
        choose(picked, num + 1, N, M) # 다음 숫자로 넘어가야함
        picked.pop()

def main():
    arr = input().split()
    N = int(arr[0])
    M = int(arr[1])
    picked = []

    choose(picked, 1, N, M)

main()
