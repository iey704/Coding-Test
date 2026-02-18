import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
queue = deque([])

for i in range(n):
    c = input().split()

    if c[0] == 'push':
        queue.append(int(c[1]))
    if c[0] == 'pop':
        print(queue.popleft() if queue else -1)
    if c[0] == 'size':
        print(len(queue))
    if c[0] == 'empty':
        print(0 if queue else 1)
    if c[0] == 'front':
        print(queue[0] if queue else -1)
    if c[0] == 'back':
        print(queue[-1] if queue else -1)