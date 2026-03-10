import sys
input = sys.stdin.readline

n = int(input())
to_do = []
answer = 0

for minute in range(n):
    hw = list(map(int, input().split()))
    check = hw[0]
    if check == 1:
        # 새로운 과제가 나오면, 새로운 거 진행
        # 새로운 과제가 마무리되면, 중단된 과제 계속해서 진행
        score = hw[1]
        remain = hw[2]
        remain -= 1
        to_do.append([score,remain])

        if remain == 0:
            answer += score
            to_do.pop()
    else: # 과제가 주어지지 않았을 때, 최근 과제 이어서 진행    
        if len(to_do) == 0:
            continue
        else:
            to_do[-1][1] -= 1

            if to_do[-1][1] == 0: # remain
                answer += to_do[-1][0] # score
                to_do.pop()

print(answer)