import sys
import math
input = sys.stdin.readline
n = int(input())

# 한 세트에 0-9까지 하나씩 들어있음.
# 각 자리수를 배열로 관리
arr = [0] * 10
for ch in str(n):
    arr[int(ch)] += 1
    
arr[6] = math.ceil((arr[6] + arr[9]) / 2) # 6 == 9 취급
arr[9] = 0

answer = max(arr)
print(answer)