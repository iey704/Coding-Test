import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    a,b = list(map(int,input().split()))
    result = pow(a,b,10)
    if result == 0:
        print(10)
    else: 
        print(result)