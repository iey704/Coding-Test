import sys
input = sys.stdin.readline
n,t = map(int,input().split())
buses = []
for _ in range(n):
    s, l, c = map(int, input().split())
    for j in range(c):
        buses.append(s + l * j)

buses.sort()

left = 0
right = len(buses)-1
while left <= right:
    mid = (left+right) // 2
    if buses[mid] == t:
        print(0) # 도착하는 동시에 버스가 출발할 때
        exit()
    elif buses[mid] < t:
        left = mid + 1
    else:
        right = mid - 1

if left >= len(buses): # 탈 수 있는 버스가 없을 때
    print(-1)
else:
    print(buses[left]-t)