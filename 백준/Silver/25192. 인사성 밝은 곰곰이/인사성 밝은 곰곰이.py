import sys
input = sys.stdin.readline

n = int(input())
s = [input().strip() for _ in range(n)]

names = set()
count = 0

for i in s:
    if i == "ENTER": 
        names = set()  # 초기화
    else: 
        if i not in names:
                count += 1
                names.add(i)
print(count)