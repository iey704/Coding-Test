import sys
from collections import deque
input = sys.stdin.readline
n,m = map(int,input().split())
arr = list(map(int, input().split()))

d = deque(range(1,n+1))
answer = 0

for i in range(m):
    # 찾고자하는 숫자의 위치 찾기 -> 왼쪽에 가까우면, 왼쪽으로 이동
    # 오른쪽에 가까우면, 오른쪽으로 이동
    pos = d.index(arr[i])
    
    left_dist = pos            
    right_dist = len(d) - pos  

    if left_dist <= right_dist:
        for _ in range(left_dist): # 인덱스 == 필요한 회전 횟수까지 반복 회전
            d.append(d.popleft())
        answer += left_dist
    else:
        for _ in range(right_dist):
            d.appendleft(d.pop())
        answer += right_dist

    d.popleft()  # 맨 앞 원소 제거

print(answer)