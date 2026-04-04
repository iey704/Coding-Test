import sys
input = sys.stdin.readline

n = int(input())
cards = set(list(map(int, input().split()))) # 순서 필요 x
m = int(input())
sang_cards = list(map(int, input().split())) # 순서 중요

answer = []
for card in sang_cards:
    if card in cards: # set에서 검색 O(1)
        answer.append('1')
    else:
        answer.append('0')

print(' '.join(answer))