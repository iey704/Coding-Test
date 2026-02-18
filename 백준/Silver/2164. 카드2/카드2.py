import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
arr = deque(map(int,list(range(1, n+1))))

# 배열의 top 버림 -> 배열의 top를 bottom으로 옮김 -> ...
while len(arr) != 1:
    arr.popleft()                  
    if arr:                        
        arr.append(arr.popleft())  

print(arr[0])