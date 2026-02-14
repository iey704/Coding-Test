import sys
input = sys.stdin.readline

a = int(input())
b = int(input())
c = int(input())

calculate = a*b*c

arr = [0]*10
for ch in str(calculate):
    arr[int(ch)] += 1

print('\n'.join(map(str, arr)))