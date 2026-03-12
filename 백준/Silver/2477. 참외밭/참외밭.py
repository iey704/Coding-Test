import sys
input = sys.stdin.readline

k = int(input())
arr = []
for _ in range(6):
    arr.append(list(map(int,input().split())))

# 1: 동쪽 [+1,0]
# 2: 서쪽 [-1,0]
# 3: 남쪽 [0,-1]
# 4: 북쪽 [0,+1]
c = [[0,0]]

for i in range(6):
    dir = arr[i][0]
    dis = arr[i][1]

    if dir == 1:
        x = c[-1][0] + dis
        y = c[-1][1]
    elif dir == 2:
        x = c[-1][0] + dis * -1
        y = c[-1][1]
    elif dir == 3:
        x = c[-1][0] 
        y = c[-1][1] + dis * -1
    else:
        x = c[-1][0] 
        y = c[-1][1] + dis

    c.append([x,y])

c.pop()

sum = 0
for index in range(5):
    sum += (c[index][0]*c[index+1][1]) - (c[index+1][0]*c[index][1])

print((sum // 2) *k)