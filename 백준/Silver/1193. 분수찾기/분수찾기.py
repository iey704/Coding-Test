import sys
input = sys.stdin.readline

x = int(input())

# 1/1 (1)
# 1/2, 2/1 (2)
# 3/1, 2/2, 1/3 (3)
# 1/4, 2/3, 3/2, 4/1 (4)
# 그룹을 나눠 1+2+3+4+5...

index = 0
sum = 0
for i in range(10000000):
    index += 1
    sum += i+1
    if sum >= x:
        break

arr = [0]*index
arr_index = x-(sum-index)-1
for j in range(index):
    if index % 2 == 0:
        arr[j] = str(j+1)+'/'+str(index-j)
    else: 
        arr[j] = str(index-j)+'/'+str(j+1)

print(arr[arr_index])