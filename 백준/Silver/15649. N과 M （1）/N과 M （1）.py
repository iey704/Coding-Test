import sys
input = sys.stdin.readline

def choose(picked, visited, N, M): 
    # 종료 조건           
    if len(picked) == M:    
        print(' '.join(map(str, picked)))     
        return                                

    for num in range(1, N+1):
        if visited[num]:
            continue

        visited[num] = True
        picked.append(num)
        # 재귀 함수 호출하고나서 M을 만족하는지 확인
        choose(picked, visited, N, M) 
        picked.pop()
        visited[num] = False

def main():
    arr = input().split()
    N = int(arr[0])
    M = int(arr[1])
    picked = []
    visited = [False] * (N + 1)

    choose(picked, visited, N, M)

main()
