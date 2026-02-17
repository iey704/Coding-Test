import sys
input = sys.stdin.readline

n = int(input())
target = []
for i in range(n):
    target.append(int(input()))

stack = []
answer = []
current = 1
for num in target:
    # 목표값까지 도달하지 않았으면, push
    while current <= num:
        stack.append(current)
        answer.append('+')
        current += 1
    
    # 스택 top이 이미 목표값과 일치한다면, pop
    if stack[-1] == num:
        stack.pop()
        answer.append('-')

    # 둘 다 아니면, 불가능
    else:
        print("NO")
        exit()

for i in range(len(answer)):
    print(answer[i])