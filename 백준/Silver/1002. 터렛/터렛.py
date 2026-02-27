import sys
import math
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    x1,y1,r1,x2,y2,r2 = map(int, input().split(' '))

    # 두 원의 교점의 개수
    # 1. 떨어진 경우.. 0개
    # 2. 내접한 경우 && 외접한 경우 .. 1개
    # 3. 겹치는 경우 .. 2개
    # 4. 두 원의 중심,반지름이 전부 같은 경우 .. 무한
    d = math.sqrt((x1-x2)**2 + (y1-y2)**2)
    if d == 0 and r1 == r2:
        print(-1)
    elif d < abs(r1-r2) or d > (r1+r2):
        print(0)
    elif d == abs(r1-r2) or d == (r1+r2): 
        print(1)
    elif abs(r1-r2) < d and d < (r1+r2):
        print(2)