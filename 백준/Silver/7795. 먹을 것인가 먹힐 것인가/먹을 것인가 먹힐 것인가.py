import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    a = []
    b = []
    num_a, num_b = list(map(int,input().strip().split()))
    a = sorted(list(map(int,input().split())))
    b = sorted(list(map(int,input().split())))

    sum = 0
    pointer_b = 0
    for pointer_a in range(num_a):
        while pointer_b < num_b and b[pointer_b] < a[pointer_a]:
            pointer_b += 1
        sum += pointer_b
    print(sum)