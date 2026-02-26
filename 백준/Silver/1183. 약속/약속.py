import sys
input = sys.stdin.readline

n = int(input())

d = []
for _ in range(n):
    a, b = map(int, input().split())
    d.append(b - a)

d.sort()

if n % 2 == 1:
    print(1)
else:
    print(d[n//2] - d[n//2 - 1] + 1) # 중앙값: 여러 점들까지 거리의 합이 가장 작은 위치