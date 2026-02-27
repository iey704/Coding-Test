import sys
input = sys.stdin.readline

n,m = map(int, input().split())
num_list = []
for _ in range(n):
    num_list.append(list(map(int,input().strip())))

# 같은 행,열 내 같은 숫자가 있는지 판단 
# 있으면, update 하고 정답으로 저장
# 더 큰 정사각형이 있으면 그걸로 저장 
answer = 1 # 정사각형 최솟값은 1임
for x in range(n):
    for y in range(m):
        for d in range(1, min(n,m)): # 정사각형이 가능한 최대 범위 설정 (더 큰 범위가 가능하다면, 정사각형 크기 update)
            if x+d < n and y+d < m: # 범위 체크 필수
                if num_list[x][y] == num_list[x+d][y] and num_list[x][y] == num_list[x][y+d] and num_list[x][y] == num_list[x+d][y+d]:
                    answer = max(answer, (d+1)**2)

print(answer)