import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
set_arr = set(arr)

answer = 0
for x in arr:
	if -x in set_arr: # 짝이 있는 경우
		continue
	else: # 솔로인 경우
		answer += x

print(answer)
