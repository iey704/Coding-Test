import sys
input = sys.stdin.readline

x,y = map(int, input().strip().split())

score = y * 100 // x
if score == 100 or score == 99: # y는 x보다 영원히 작음
    print(-1)
else:
    left = 1
    right = x 
    while left < right: # 두 값이 같을 때 stop
        mid = (left + right) // 2
        new_score = (y+mid) * 100 // (x+mid)
        if new_score == score:
            # 승률 안 바뀜. k가 더 커야함. mid 아래 값은 다 버리기
            left = mid + 1
        else: # 승률 바뀜. k값 이하 확인 필요
            right = mid
    print(left)