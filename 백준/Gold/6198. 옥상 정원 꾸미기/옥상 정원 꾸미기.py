import sys
input = sys.stdin.readline
n = int(input())

heights = []
for _ in range(n):
    heights.append(int(input()))

stack = []
sum = 0
for i in range(n):
    current = heights[i]
    top = stack[-1] if stack else 0
    
    while stack and current >= top:
        stack.pop()
        top = stack[-1] if stack else 0
    
    sum += len(stack)

    stack.append(current)
    # if len(stack) == 0: 
    #     stack.append(current)
    # elif current < top:
    #     stack.append(current)
    
print(sum)