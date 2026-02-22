import sys
input = sys.stdin.readline

n,m = map(int,input().split())
arrNum = 2
data = []
for _ in range(arrNum):
    arr = list(map(int,input().split(' ')))
    data += arr

answer = sorted(data)
sys.stdout.write(' '.join(map(str,answer)))