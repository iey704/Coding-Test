import sys
input = sys.stdin.readline
n = int(input())
count = 0

# 범위: N은 1000까지만 가능하다
for i in range(1,n+1):
    if i < 100: # 한자리나 두자리 수일 때
        count += 1
    else:
        digit1 = i // 100
        digit2 = (i//10) % 10
        digit3 = i % 10
        if (digit3-digit2) == (digit2-digit1):
            count += 1

sys.stdout.write(str(count))