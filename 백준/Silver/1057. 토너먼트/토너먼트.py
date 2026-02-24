import sys
import math
input = sys.stdin.readline
num,kim,lim = map(int, input().split())
result = 0
arr = []
for i in range(num):
    arr.append(i)

# 절반씩 줄을 때마다 라운드 +1
while kim != lim:
    # 번호 부여
    kim = math.ceil(kim / 2)
    lim = math.ceil(lim / 2)
    # 줄이기 (num=num/2) -> result += 1
    result += 1

print(result)