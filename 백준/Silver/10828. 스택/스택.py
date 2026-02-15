import sys
input = sys.stdin.readline

n = int(input())
stack = []
result = [] # 출력용

for i in range(n):
    command = input().split()
    if command[0] == 'push':
        stack.append(int(command[1]))
    elif command[0] == 'pop':
        if len(stack) != 0:
            result.append(str(stack.pop()))
        else:
            result.append('-1')
    elif command[0] == 'size':
        result.append(str(len(stack)))
    elif command[0] == 'empty':
        if len(stack) != 0:
            result.append('0')
        else:
            result.append('1')
    elif command[0] == 'top':
        if len(stack) != 0:
            result.append(str(stack[-1])) # 스택의 가장 위
        else:
            result.append('-1')

print('\n'.join(result))