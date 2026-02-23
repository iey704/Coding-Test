import sys
input = sys.stdin.readline

n,m = map(int, input().split()) # m*n
num = 8

board = []
for _ in range(n):
    board.append(input().strip())

result = 64 # 전부 칠하는 경우 (최댓)
for i in range(n-num+1):
    for j in range(m-num+1):
        count1 = 0
        count2 = 0
        
        # 8*8 순회
        for x in range(i,i+8):
            for y in range(j,j+8):
                # 시작점 상대값으로 설정: 항상 (0,0)에서 시작 (0~7)
                dx = x-i
                dy = y-j
                if (dx + dy) % 2 == 0:
                    # 패턴1
                    if board[x][y] != 'B':
                        count1 += 1
                    # 패턴2
                    if board[x][y] != 'W':
                        count2 += 1
                else:
                    # 패턴1
                    if board[x][y] != 'W':
                        count1 += 1
                    # 패턴2
                    if board[x][y] != 'B':
                        count2 += 1
        # 지금까지의 최솟값 vs 패턴1로 만드는 비용 vs 패턴2로 만드는 비용
        result = min(result, count1, count2)

print(result)