import sys
from collections import Counter
input = sys.stdin.readline

n = int(input())
cards_list = list(map(int,input().split()))
cards = Counter(cards_list)

m = int(input())
sang_cards = list(map(int, input().split()))

answer = []
for card in sang_cards:
    if card in cards: # dict 조회 -> O(1)
        answer.append(str(cards[card]))
    else: 
        answer.append('0')
print(' '.join(answer))