import sys 
input = sys.stdin.readline

n = int(input())
arr = list(map(int,input().split()))
answer = [-1] * n # 초기화 값 == -1
stack = [] # 비교 대상 대기열

for i in range(n):
    # arr[i]보다 크거나 오른쪽 요소가 존재하는 경우
    while stack and arr[i] > arr[stack[-1]]:
        answer[stack.pop()] = arr[i]
    stack.append(i) # 못 찾은 경우에도 대기열에 추가

print(' '.join(map(str, answer)))