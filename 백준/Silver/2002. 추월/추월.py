import sys
input = sys.stdin.readline

n = int(input())
in_cars = []
out_cars = []
for _ in range(n):
    in_cars.append(input())
for _ in range(n):
    out_cars.append(input())

ordered_in_cars = {}
for index, car in enumerate(in_cars): # 인덱스와 요소 반환
    ordered_in_cars[car] = index

answer = 0
# 나온 순서대로 보면서 뒤에 더 작은 인덱스가 있는지 확인 == 이중 for문
for i in range(n):
    for j in range(i+1, n):
        if ordered_in_cars[out_cars[i]] > ordered_in_cars[out_cars[j]]:
            answer += 1
            break
print(answer)