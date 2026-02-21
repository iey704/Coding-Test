import sys
from collections import deque
input = sys.stdin.readline

n,l = map(int,input().split())
arr = list(map(int,input().split()))

# A[i-L+1] ~ A[i]
answer = []
d = deque()

for i in range(n):
    index = i
    value = arr[i]

    # 현재 값보다 큰 값들은 제거
    while d and d[-1][1] > value:
        d.pop()

    # 튜플 형식으로 (인덱스, 값) 추가
    d.append((index, value))

    # 확인해야하는 범위를 벗어난 원소는 인덱스 확인 후 제거
    if d[0][0] < index-l+1:
        d.popleft()
    
    sys.stdout.write(str(d[0][1]) + ' ')