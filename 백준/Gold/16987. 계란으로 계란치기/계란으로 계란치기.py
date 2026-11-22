import sys
input = sys.stdin.readline

n = int(input())

eggs = [] # [내구도, 무게]
for _ in range(n):
    s, w = map(int, input().split())
    eggs.append([s, w])

def count_broken_eggs():
    count = 0
    for k in range(n):
        if eggs[k][0] <= 0:
            count += 1
    return count

def break_eggs(i):
    # 종료 조건
    if i == n:
        return count_broken_eggs()
    # 넘어가는 조건: 현재 달걀이 깨져있을 때
    if eggs[i][0] <= 0:
        return break_eggs(i + 1)

    max_count = 0
    hit = False 
    # 진행 조건
    for j in range(n):
        if j == i or eggs[j][0] <= 0: # 넘어가는 조건
            continue
        hit = True
        # 충돌 계산
        eggs[i][0] -= eggs[j][1]
        eggs[j][0] -= eggs[i][1]
        max_count = max(max_count, break_eggs(i + 1))
        # 되돌리기
        eggs[i][0] += eggs[j][1]
        eggs[j][0] += eggs[i][1]

    if not hit:
        return break_eggs(i + 1) # 넘어가는 조건
    return max_count

answer = break_eggs(0)
print(answer)