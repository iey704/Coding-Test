import sys
from collections import Counter
input = sys.stdin.readline

n = int(input())
books = []
for _ in range(n):
    books.append(input().strip())

# 1순위: 개수, 2순위: 사전 순
most_book = sorted(Counter(books).items(), key=lambda x:(-x[1], x[0]))
print(most_book[0][0])