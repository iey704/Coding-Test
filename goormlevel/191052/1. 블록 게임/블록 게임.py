import sys
input = sys.stdin.readline

n = int(input())
d = input()
blocks = list(map(int,input().split()))

# L(x-1,y), R(x+1,y), U(x,y+1), D(x,y-1)
x=0
y=0
score=1
stack = [(x,y,score)] # x,y,점수
positions = {(x,y)}

for i in range(n):
	# 새로 놓을 블록 위치 계산
	dir = d[i]
	score = blocks[i]
	if dir == 'L':
		x -= 1
	elif dir == 'R':
		x += 1
	elif dir == 'U':
		y += 1
	else: # 'D'
		y -= 1

	# 블록을 새로 놓을 위치에 원래 블록이 존재하지 않을 때까지 최근에 놓은 블록들을 순서대로 제거
	while (x, y) in positions:
		bx,by,bscore = stack.pop()
		positions.remove((bx, by))

	# 그런 다음 블록을 새로 놓음
	stack.append((x,y,score))
	positions.add((x, y))

answer = 0
for item in stack:
	answer += item[2]

print(answer)
