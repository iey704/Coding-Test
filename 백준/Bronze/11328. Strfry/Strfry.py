import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
    a,b = input().split()

    # 문자열을 알파벳순으로 정렬한 리스트를 반환
    if sorted(a) == sorted(b):
        print('Possible')
    else:
        print('Impossible')