import sys
input = sys.stdin.readline

l = int(input())
s = list(map(int,input().split()))
n = int(input())

# 1. 집합 s에 n이 포함되는지 확인
if n in s:
    print(0)
else:
    s.sort()
    # 2. n을 포함하는 구간 내 최솟값 확인
    left = 0
    right = 1001
    for x in s:
        if x < n:
            left = max(left,x) # 작은 것들 중 큰 것
        if x > n:
            right = min(right,x) # 큰 것들 중 작은 것
    # 좋은 구간 
    a = n-(left+1)+1
    b = (right-1)-n+1
    answer = a*b-1

    print(answer)