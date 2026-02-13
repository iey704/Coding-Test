from math import ceil
import sys

input = sys.stdin.readline

n, k = map(int, input().split())
rooms = [[0]*2 for _ in range(7)] # 이중 배열 row 6 * column 2

for _ in range(n):
    s,y = map(int,input().split()) # y==학년, s == 성별
    # y가 같은 것들 중 s가 같은 것 카운트 넣기
    rooms[y][s] += 1 

total = 0
for y in range(1,7):
    for s in range(2):
        total += ceil(rooms[y][s] / k)

print(total)