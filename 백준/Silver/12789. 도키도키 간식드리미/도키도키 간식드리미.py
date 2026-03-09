import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int,input().split()))

stack = []
next = 1

for i in range(n):
    if arr[i] != next: # 자기 순번이 아닐 때
        stack.append(arr[i])
    else: # 자기 순번일 때
        next += 1
        while len(stack) != 0 and stack[-1] == next: # 배열과 함께 스택의 꼭대기도 확인 필요
            stack.pop()
            next+=1 

if len(stack) == 0:
    print("Nice")
else:
    print("Sad")