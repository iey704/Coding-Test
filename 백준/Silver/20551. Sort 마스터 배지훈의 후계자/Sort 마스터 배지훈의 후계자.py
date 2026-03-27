import sys
input = sys.stdin.readline

n,m = map(int, input().strip().split())

arr_n = []
arr_m = []
for _ in range(n):
    arr_n.append(int(input().strip()))
arr_b = sorted(arr_n)

for _ in range(m):
    arr_m.append(int(input().strip()))

for i in range(m):
    left = 0
    right = n-1
    D = arr_m[i]

    while left <= right:
        mid = (left+right)//2
        if arr_b[mid] < D: 
            left = mid + 1
        else: # 같을 때에도 처음으로 등장하는 위치를 다시 봐야함
            right = mid - 1
    
    if left < n and arr_b[left] == D:
        print(left)
    else:
        print(-1)