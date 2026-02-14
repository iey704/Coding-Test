import sys
input = sys.stdin.readline

n = int(input())
arr = sorted(list(map(int, input().split())))
x = int(input())

left = 0
right = n-1
count = 0
while(left < right):
    sum = arr[left] + arr[right]
    # x보다 작으면, left 이동
    if(sum < x): 
        left += 1
    # 크면, right 이동
    elif(sum > x):
        right -= 1
    # 같으면, count+1 & left,right 이동
    else: 
        count += 1
        left += 1
        right -= 1
        
print(count)