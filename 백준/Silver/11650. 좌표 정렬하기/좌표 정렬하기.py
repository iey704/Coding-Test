import sys
input = sys.stdin.readline

n = int(input())
data = []
for i in range(n):
    x,y = map(int,input().split(' '))
    data.append((x,y))

data.sort(key=lambda d:(d[0],d[1]))

# sys.stdout.write(str(data)+'\n')
for x,y in data:
    sys.stdout.write(str(x)+' '+str(y)+'\n')