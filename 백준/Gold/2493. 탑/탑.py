import sys
input = sys.stdin.readline

n = int(input())
heights = list(map(int,input().split()))

stack = []
answer = [0] * n
for i in range(n):
    # 왼쪽에 값이 있고 자신보다 클 때 수신 받음
    # 나보다 작은 탑은 제거
    while stack and heights[stack[-1]] < heights[i]:
        stack.pop()

    # 스택에 남아있는 맨 위 = 나보다 크거나 같은 가장 가까운 탑
    if stack:
        answer[i] = stack[-1] + 1 # 인덱스 계산

    stack.append(i)

print(' '.join(map(str, answer)))