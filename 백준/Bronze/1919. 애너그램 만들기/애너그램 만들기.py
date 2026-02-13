import sys
from collections import Counter

input = sys.stdin.readline

word1 = sorted(input())
word2 = sorted(input())

# 교집합으로 중복을 제외한 공통 부분을 구하기
common = Counter(word1) & Counter(word2)

remove = len(word1) + len(word2) - 2*sum(common.values())
print(remove)