import sys
input = sys.stdin.readline

k,n = list(map(int, input().split()))
lines = []
for _ in range(k):
    lines.append(int(input().strip()))

answer = 0
low = 1
high = max(lines)
while low <= high: # 이분 탐색
    count = 0
    mid = (low+high) // 2
    for i in range(k):
        count += (lines[i] // mid) # 랜선 개수 구하기
    if count >= n: # 랜선의 개수가 필요한 n개보다 많을 땐, 최대 랜선 길이를 찾기 위해 떠난다..
        low = mid+1
        answer = mid
    else: # 랜선의 개수가 필요한 n개보다 적을 떈, 범위를 조정
        high = mid-1
print(answer)