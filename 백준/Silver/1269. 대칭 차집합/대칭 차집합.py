import sys 
input = sys.stdin.readline

num_a, num_b = map(int,input().split())
set_a = set(list(map(int,input().split())))
set_b = set(list(map(int,input().split())))

# 집합 문제 → set
result = len(set_a - set_b) + len(set_b - set_a)
print(result)