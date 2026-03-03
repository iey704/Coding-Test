import sys 
input = sys.stdin.readline

n = int(input())
arr = [input().strip() for _ in range(n)]

result = ""
# 같은 줄 내 문자끼리 튜플로 묶어줌
for char in zip(*arr):
    # 같은 줄 내 문자들끼리 비교한 뒤 문자들이 같으면, 그대로 출력
    if len(set(char)) == 1:
        result += char[0]
    else: # 다르면, ?으로 대체
        result += "?"

print(result)