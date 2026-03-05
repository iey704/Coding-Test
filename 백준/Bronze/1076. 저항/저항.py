import sys
input = sys.stdin.readline

colors = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

arr = [input().strip() for _ in range(3)]
first = colors.index(arr[0])
second = colors.index(arr[1])
third = colors.index(arr[2])

print((first*10+second)*10**third)