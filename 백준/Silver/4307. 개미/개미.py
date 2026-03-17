import sys 
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    stick_n, ants_n = list(map(int,input().split()))
    ants = []
    for _ in range(ants_n):
        ants.append(int(input().strip()))
    
    min_time = 0
    max_time = 0
    for i in range(ants_n):
        min_time = max(min_time, min(ants[i], stick_n - ants[i]))
        max_time = max(max_time, max(ants[i], stick_n - ants[i]))

    print(min_time, max_time)