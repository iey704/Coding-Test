import sys
input = sys.stdin.readline

arr = input().strip().split('-')
length = len(arr)

sums = []

for a in arr:
    total = 0
    for x in a.split('+'):
        total += int(x)
    sums.append(total)

answer = sums[0]
for i in range(1, len(sums)):
    answer -= sums[i]

print(answer)