import sys
input = sys.stdin.readline

n = int(input())
for i in range(n):
    sentence = input().split()
    print(f"Case #{i+1}: {' '.join(sentence[::-1])}")