import sys
input = sys.stdin.readline

n = int(input())
people = list(map(int,input().split()))

result = []
for i in range(n):
    result.insert(people[n-1-i],n-i) 

print(' '.join(map(str, result)))